import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const initialMessages = [
    {
        id: "welcome",
        role: "assistant",
        content:
            "Halo, aku bisa bantu jawab pertanyaan tentang Rizqi, project, pendidikan, dan pengalamannya.",
    },
];

const starterQuestions = [
    "Ringkasan Rizqi",
    "Pengalaman Rizqi",
];

const centralizedChatApiUrl = "https://api.rizam.fun/openai/portfolio-chat";

// DEFAULT: OpenAI dipanggil melalui gateway terpusat api.rizam.fun.
const defaultChatApiUrl = centralizedChatApiUrl;

// FALLBACK API ASLI YANG SUDAH ADA:
// Jika gateway gagal di-deploy, komentari default di atas lalu aktifkan salah satu.
// const defaultChatApiUrl = "https://portofolio-72b.pages.dev/api/chat";
// const defaultChatApiUrl = "/api/chat";

const resolveChatApiUrl = () => {
    if (import.meta.env.VITE_AI_CHAT_API_URL) {
        return import.meta.env.VITE_AI_CHAT_API_URL;
    }

    return defaultChatApiUrl;
};

const chatApiUrl = resolveChatApiUrl();
const aiUnavailableMessage =
    "Maaf, Rizam AI sedang belum bisa dihubungi. Coba lagi beberapa saat lagi ya.";
const aiLimitMessage =
    "Maaf, kuota chat AI hari ini sedang penuh. Silakan coba lagi besok atau hubungi Rizqi langsung lewat kontak yang tersedia.";

class ChatRequestError extends Error {
    constructor(message, status) {
        super(message);
        this.name = "ChatRequestError";
        this.status = status;
    }
}

const getFriendlyErrorMessage = (error) => {
    if (error?.status === 429) {
        return aiLimitMessage;
    }

    if (error?.status >= 500 || error instanceof TypeError) {
        return aiUnavailableMessage;
    }

    return aiUnavailableMessage;
};

const buildMessage = (role, content) => ({
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
});

const parseInline = (text, keyPrefix) => {
    const markerPattern = /(\*\*[^*]+?\*\*|__[^_]+?__|_[^_]+?_|[*][^*]+?[*])/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = markerPattern.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }

        const token = match[0];
        const key = `${keyPrefix}-${match.index}`;

        if (token.startsWith("**")) {
            parts.push(<strong key={key}>{token.slice(2, -2)}</strong>);
        } else if (token.startsWith("__")) {
            parts.push(<u key={key}>{token.slice(2, -2)}</u>);
        } else {
            parts.push(<em key={key}>{token.slice(1, -1)}</em>);
        }

        lastIndex = markerPattern.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
};

const parseMarkdownBlocks = (content) => {
    const blocks = [];
    const lines = String(content || "")
        .replace(/\r/g, "")
        .split("\n");
    let paragraph = [];
    let list = null;

    const flushParagraph = () => {
        if (paragraph.length === 0) {
            return;
        }

        blocks.push({
            type: "paragraph",
            text: paragraph.join(" "),
        });
        paragraph = [];
    };

    const flushList = () => {
        if (!list) {
            return;
        }

        blocks.push(list);
        list = null;
    };

    lines.forEach((line) => {
        const trimmed = line.trim();

        if (!trimmed) {
            flushParagraph();
            flushList();
            return;
        }

        const heading = trimmed.match(/^#{1,4}\s+(.+)$/);
        const bullet = trimmed.match(/^[-*]\s+(.+)$/);
        const numbered = trimmed.match(/^(\d+)[.)]\s+(.+)$/);

        if (heading) {
            flushParagraph();
            flushList();
            blocks.push({
                type: "heading",
                text: heading[1],
            });
            return;
        }

        if (bullet || numbered) {
            const type = bullet ? "unordered-list" : "ordered-list";
            const text = bullet ? bullet[1] : numbered[2];
            const start = numbered ? Number(numbered[1]) : undefined;

            flushParagraph();

            if (!list || list.type !== type) {
                flushList();
                list = {
                    type,
                    items: [],
                    start,
                };
            }

            list.items.push(text);
            return;
        }

        flushList();
        paragraph.push(trimmed);
    });

    flushParagraph();
    flushList();

    return blocks;
};

const MarkdownMessage = ({ content }) => {
    const blocks = parseMarkdownBlocks(content);

    return (
        <div className="grid gap-2 break-words text-sm leading-6 [&_h4]:font-display [&_h4]:text-xs [&_h4]:font-normal [&_h4]:leading-relaxed [&_p]:m-0 [&_ul]:my-0 [&_ul]:grid [&_ul]:list-disc [&_ul]:gap-1 [&_ul]:pl-5 [&_ol]:my-0 [&_ol]:grid [&_ol]:list-decimal [&_ol]:gap-1 [&_ol]:pl-5">
            {blocks.map((block, blockIndex) => {
                if (block.type === "heading") {
                    return (
                        <h4 key={`heading-${blockIndex}`}>
                            {parseInline(block.text, `heading-${blockIndex}`)}
                        </h4>
                    );
                }

                if (block.type === "unordered-list") {
                    return (
                        <ul key={`ul-${blockIndex}`}>
                            {block.items.map((item, itemIndex) => (
                                <li key={`ul-${blockIndex}-${itemIndex}`}>
                                    {parseInline(
                                        item,
                                        `ul-${blockIndex}-${itemIndex}`,
                                    )}
                                </li>
                            ))}
                        </ul>
                    );
                }

                if (block.type === "ordered-list") {
                    return (
                        <ol key={`ol-${blockIndex}`} start={block.start}>
                            {block.items.map((item, itemIndex) => (
                                <li key={`ol-${blockIndex}-${itemIndex}`}>
                                    {parseInline(
                                        item,
                                        `ol-${blockIndex}-${itemIndex}`,
                                    )}
                                </li>
                            ))}
                        </ol>
                    );
                }

                return (
                    <p key={`p-${blockIndex}`}>
                        {parseInline(block.text, `p-${blockIndex}`)}
                    </p>
                );
            })}
        </div>
    );
};

const AiChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [limitInfo, setLimitInfo] = useState(null);
    const listRef = useRef(null);

    useEffect(() => {
        if (!isOpen || !listRef.current) {
            return;
        }

        listRef.current.scrollTop = listRef.current.scrollHeight;
    }, [messages, isLoading, isOpen]);

    useEffect(() => {
        if (!isOpen) return undefined;
        const handleEscape = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const submitMessage = async (text) => {
        const question = text.trim();

        if (!question || isLoading) {
            return;
        }

        const userMessage = buildMessage("user", question);
        const nextMessages = [...messages, userMessage];

        setMessages(nextMessages);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch(chatApiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: question,
                    history: nextMessages
                        .filter((item) => item.id !== "welcome")
                        .slice(-8)
                        .map((item) => ({
                            role: item.role,
                            content: item.content,
                        })),
                }),
            });

            const contentType = response.headers.get("content-type") || "";
            const data = contentType.includes("application/json")
                ? await response.json()
                : {};

            if (!response.ok) {
                throw new ChatRequestError(
                    data.error || "AI belum bisa menjawab.",
                    response.status,
                );
            }

            setLimitInfo(data.rateLimit || null);
            setMessages((current) => [
                ...current,
                buildMessage("assistant", data.answer),
            ]);
        } catch (error) {
            setMessages((current) => [
                ...current,
                buildMessage(
                    "assistant",
                    getFriendlyErrorMessage(error),
                ),
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        submitMessage(input);
    };

    const showStarterQuestions = !messages.some(
        (message) => message.role === "user",
    );

    return (
        <>
            {isOpen
                ? createPortal(
                <section
                    className="fixed bottom-24 right-4 z-[70] flex h-[min(35rem,calc(90dvh-8rem))] w-[min(25rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border-[2.5px] border-border bg-card shadow-[8px_8px_0_#0A0A0A]"
                    aria-label="Chat AI"
                    role="dialog"
                >
                    <header className="flex items-center justify-between gap-4 border-b-2 border-border bg-primary px-4 py-3">
                        <div className="grid gap-0.5">
                            <span className="font-display text-xs font-semibold">Rizam AI</span>
                            <strong className="font-display text-sm font-semibold sm:text-base">Tanya portofolio</strong>
                        </div>
                        <button
                            type="button"
                            className="inline-flex size-11 items-center justify-center rounded border-2 border-border bg-card text-foreground"
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup chat AI"
                        >
                            <i
                                className="fa-solid fa-xmark"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </header>

                    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overscroll-contain p-4" ref={listRef} aria-live="polite">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`max-w-[88%] rounded-lg border-2 border-border px-3 py-2.5 text-sm leading-6 ${message.role === "user" ? "self-end bg-primary text-foreground" : "self-start bg-muted text-foreground"}`}
                            >
                                <MarkdownMessage content={message.content} />
                            </div>
                        ))}

                        {isLoading ? (
                            <div className="flex min-w-16 self-start items-center gap-1 rounded-lg border-2 border-border bg-muted px-3 py-3" role="status" aria-label="Rizam AI sedang mengetik">
                                <span className="size-2 animate-pulse rounded-full bg-accent motion-reduce:animate-none" />
                                <span className="size-2 animate-pulse rounded-full bg-accent [animation-delay:120ms] motion-reduce:animate-none" />
                                <span className="size-2 animate-pulse rounded-full bg-accent [animation-delay:240ms] motion-reduce:animate-none" />
                            </div>
                        ) : null}
                    </div>

                    {showStarterQuestions ? (
                        <div className="grid justify-items-end gap-2 px-4 pb-3">
                            {starterQuestions.map((question) => (
                                <button
                                    className="min-h-11 rounded-full border border-border bg-card px-3 text-left text-xs font-semibold hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
                                    key={question}
                                    type="button"
                                    onClick={() => submitMessage(question)}
                                    disabled={isLoading}
                                >
                                    {question}
                                </button>
                            ))}
                        </div>
                    ) : null}

                    <form className="flex items-end gap-2 border-t-2 border-border p-3" onSubmit={handleSubmit}>
                        <textarea
                            className="min-h-12 max-h-32 min-w-0 flex-1 resize-y rounded border-2 border-border bg-background px-3 py-2 text-sm placeholder:text-foreground/50"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Tanya tentang Rizqi..."
                            aria-label="Pertanyaan untuk Rizam AI"
                            rows="2"
                            maxLength="1400"
                            disabled={isLoading}
                        ></textarea>
                        <button
                            type="submit"
                            className="inline-flex size-12 shrink-0 items-center justify-center rounded border-2 border-border bg-primary text-foreground disabled:cursor-not-allowed disabled:opacity-40"
                            disabled={isLoading || input.trim().length === 0}
                            aria-label="Kirim pertanyaan"
                        >
                            <i
                                className="fa-solid fa-paper-plane"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </form>

                    {limitInfo ? (
                        <p className="border-t border-border px-3 py-2 text-center text-xs text-foreground/70">
                            Sisa token harian perangkat ini:{" "}
                            {Math.max(
                                0,
                                Math.floor(limitInfo.dailyIpTokenRemaining),
                            )}
                        </p>
                    ) : null}
                </section>,
                document.body,
            )
                : null}

            <button
                type="button"
                className="fixed bottom-5 right-5 z-[70] inline-flex size-12 items-center justify-center rounded-full border-2 border-border bg-accent text-lg text-accent-foreground shadow-[4px_4px_0_#0A0A0A] transition hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#0A0A0A]"
                onClick={() => setIsOpen((current) => !current)}
                aria-label={isOpen ? "Tutup chat AI" : "Buka chat AI"}
                aria-expanded={isOpen}
            >
                <i className="fa-solid fa-comments" aria-hidden="true"></i>
            </button>
        </>
    );
};

export default AiChat;
