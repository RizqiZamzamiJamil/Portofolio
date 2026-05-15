import { useEffect, useRef, useState } from "react";
import "./Style.css";

const initialMessages = [
    {
        id: "welcome",
        role: "assistant",
        content:
            "Halo, aku bisa bantu jawab pertanyaan tentang Rizqi, project, pendidikan, dan pengalamannya.",
    },
];

const starterQuestions = [
    "Project Rizqi yang paling relevan apa?",
    "Rizqi paling kuat di stack apa?",
    "Ceritakan pengalaman magangnya.",
];
const githubPagesChatApiUrl =
    "https://zesty-kheer-0ca6d3.netlify.app/api/chat";

const resolveChatApiUrl = () => {
    if (import.meta.env.VITE_AI_CHAT_API_URL) {
        return import.meta.env.VITE_AI_CHAT_API_URL;
    }

    if (
        typeof window !== "undefined" &&
        window.location.hostname.endsWith("github.io")
    ) {
        return githubPagesChatApiUrl;
    }

    return "/api/chat";
};

const chatApiUrl = resolveChatApiUrl();

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
        const numbered = trimmed.match(/^\d+[.)]\s+(.+)$/);

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
            const text = bullet ? bullet[1] : numbered[1];

            flushParagraph();

            if (!list || list.type !== type) {
                flushList();
                list = {
                    type,
                    items: [],
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
        <div className="ai-chat__rich-text">
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
                        <ol key={`ol-${blockIndex}`}>
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
                : {
                      error: "Endpoint AI belum mengembalikan JSON. Pastikan GitHub Pages diarahkan ke Netlify Function.",
                  };

            if (!response.ok) {
                throw new Error(data.error || "AI belum bisa menjawab.");
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
                    error.message ||
                        "Maaf, chat AI sedang belum tersedia. Coba lagi sebentar lagi.",
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

    return (
        <div className={isOpen ? "ai-chat is-open" : "ai-chat"}>
            {isOpen ? (
                <section
                    className="ai-chat__panel content-panel"
                    aria-label="Chat AI"
                >
                    <header className="ai-chat__header">
                        <div>
                            <span>Rizam AI</span>
                            <strong>Tanya portofolio</strong>
                        </div>
                        <button
                            type="button"
                            className="ai-chat__icon-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup chat AI"
                        >
                            <i
                                className="fa-solid fa-xmark"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </header>

                    <div className="ai-chat__messages" ref={listRef}>
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={
                                    message.role === "user"
                                        ? "ai-chat__message is-user"
                                        : "ai-chat__message is-assistant"
                                }
                            >
                                <MarkdownMessage content={message.content} />
                            </div>
                        ))}

                        {isLoading ? (
                            <div className="ai-chat__message is-assistant is-loading">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        ) : null}
                    </div>

                    <div className="ai-chat__starters">
                        {starterQuestions.map((question) => (
                            <button
                                key={question}
                                type="button"
                                onClick={() => submitMessage(question)}
                                disabled={isLoading}
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                    <form className="ai-chat__form" onSubmit={handleSubmit}>
                        <textarea
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            placeholder="Tanya tentang Rizqi..."
                            rows="2"
                            maxLength="1400"
                            disabled={isLoading}
                        ></textarea>
                        <button
                            type="submit"
                            className="ai-chat__send"
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
                        <p className="ai-chat__limit">
                            Sisa token harian perangkat ini:{" "}
                            {Math.max(
                                0,
                                Math.floor(limitInfo.dailyIpTokenRemaining),
                            )}
                        </p>
                    ) : null}
                </section>
            ) : null}

            <button
                type="button"
                className="ai-chat__toggle"
                onClick={() => setIsOpen((current) => !current)}
                aria-label="Buka chat AI"
            >
                <i className="fa-solid fa-comments" aria-hidden="true"></i>
            </button>
        </div>
    );
};

export default AiChat;
