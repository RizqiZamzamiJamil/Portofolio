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

const buildMessage = (role, content) => ({
    id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    role,
    content,
});

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
            const response = await fetch("/api/chat", {
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

            const data = await response.json();

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
                        "Maaf, chat AI sedang belum tersedia. Coba lagi sebentar lagi."
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
                <section className="ai-chat__panel content-panel" aria-label="Chat AI">
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
                            <i className="fa-solid fa-xmark" aria-hidden="true"></i>
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
                                {message.content}
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
                            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                        </button>
                    </form>

                    {limitInfo ? (
                        <p className="ai-chat__limit">
                            Sisa token harian perangkat ini:{" "}
                            {Math.max(0, Math.floor(limitInfo.dailyIpTokenRemaining))}
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
