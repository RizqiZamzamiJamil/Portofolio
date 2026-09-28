import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getProjectCategory } from "../data/portfolioData";
import { getStackBadgeStyle } from "../data/stackLogos";
import { getProjectDateLabel } from "../utils/projectDate";

const getProjectScreenshots = (project) => {
    const images = project.screenshots?.length
        ? project.screenshots
        : project.image
          ? [project.image]
          : [];

    return images.map((image, index) =>
        typeof image === "string"
            ? {
                  src: image,
                  alt: `${project.title}, screenshot ${index + 1}`,
              }
            : {
                  ...image,
                  alt: image.alt || `${project.title}, screenshot ${index + 1}`,
              },
    );
};

const normalizeUrl = (value) => (value ? value.trim().replace(/\/$/, "") : "");

const ProjectDetailModal = ({ project, onClose }) => {
    const [activeScreenshot, setActiveScreenshot] = useState(0);
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const category = getProjectCategory(project);
    const screenshots = useMemo(
        () => getProjectScreenshots(project),
        [project],
    );
    const liveUrl = normalizeUrl(project.liveUrl);
    const codeUrl = normalizeUrl(project.codeUrl);
    const hasLivePreview = Boolean(liveUrl) && liveUrl !== codeUrl;
    const selectedScreenshot = screenshots[activeScreenshot] || screenshots[0];

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const previouslyFocusedElement = document.activeElement;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                onClose();
                return;
            }

            if (event.key !== "Tab") return;

            const focusableElements = dialogRef.current?.querySelectorAll(
                'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
            );
            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
            previouslyFocusedElement?.focus?.();
        };
    }, [onClose]);

    useEffect(() => {
        setActiveScreenshot(0);
    }, [project.id]);

    return createPortal(
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-foreground/85 p-3 sm:p-4"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <article
                ref={dialogRef}
                className="w-full max-w-3xl overflow-hidden border-[2.5px] border-border bg-white shadow-[8px_8px_0_#0A0A0A]"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-detail-title"
            >
                <header
                    className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-2 border-border px-4 py-3 sm:px-6 sm:py-4"
                    style={{
                        backgroundColor: category.background,
                        color: category.foreground,
                    }}
                >
                    <h2
                        className="min-w-0 font-display text-base font-extrabold leading-tight sm:text-lg"
                        id="project-detail-title"
                    >
                        {project.title}
                    </h2>
                    <button
                        ref={closeButtonRef}
                        type="button"
                        onClick={onClose}
                        className="inline-flex size-10 shrink-0 items-center justify-center border-2 border-border bg-foreground text-xl text-white transition-colors hover:bg-accent"
                        aria-label="Tutup detail project"
                    >
                        <span aria-hidden="true">×</span>
                    </button>
                </header>

                <div className="max-h-[calc(90dvh-4rem)] space-y-5 overflow-y-auto p-4 sm:p-5 md:p-6">
                    <section aria-label="Screenshot proyek">
                        {selectedScreenshot ? (
                            <div className="overflow-hidden border-[2.5px] border-border bg-muted shadow-[4px_4px_0_#0A0A0A]">
                                <img
                                    src={selectedScreenshot.src}
                                    alt={selectedScreenshot.alt}
                                    className="aspect-video max-h-[320px] w-full object-cover"
                                />
                            </div>
                        ) : (
                            <div className="grid aspect-video place-items-center border-[2.5px] border-border bg-muted text-sm text-foreground/65">
                                Screenshot belum tersedia.
                            </div>
                        )}

                        {screenshots.length > 1 ? (
                            <div
                                className="mt-3 flex flex-wrap gap-2"
                                role="group"
                                aria-label="Pilih screenshot proyek"
                            >
                                {screenshots.map((screenshot, index) => (
                                    <button
                                        key={`${screenshot.src}-${index}`}
                                        type="button"
                                        onClick={() =>
                                            setActiveScreenshot(index)
                                        }
                                        className={`size-14 overflow-hidden border-2 border-border transition-opacity sm:size-16 ${activeScreenshot === index ? "opacity-100 shadow-[3px_3px_0_#0A0A0A]" : "opacity-55 hover:opacity-85"}`}
                                        aria-label={`Tampilkan screenshot ${index + 1}`}
                                        aria-pressed={
                                            activeScreenshot === index
                                        }
                                    >
                                        <img
                                            src={screenshot.src}
                                            alt=""
                                            className="size-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        ) : null}
                    </section>

                    <dl className="grid gap-3 sm:grid-cols-3">
                        {[
                            {
                                label: project.dateLabel?.startsWith("Sejak ")
                                    ? "Periode"
                                    : "Tanggal Selesai",
                                value: getProjectDateLabel(project),
                            },
                            { label: "Posisi", value: project.position || "—" },
                            {
                                label: "Kategori",
                                value: category.detailLabel,
                            },
                        ].map((detail) => (
                            <div
                                key={detail.label}
                                className="min-w-0 border-[2.5px] border-border bg-muted p-3 shadow-[2px_2px_0_#0A0A0A]"
                            >
                                <dt className="font-display text-[10px] font-bold uppercase tracking-widest text-foreground/55 sm:text-[11px]">
                                    {detail.label}
                                </dt>
                                <dd className="mt-0.5 break-words text-sm font-semibold text-foreground">
                                    {detail.value}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <section>
                        <h3 className="mb-2 font-display text-[11px] font-bold uppercase tracking-widest text-foreground/55 sm:text-xs">
                            Deskripsi Proyek
                        </h3>
                        <p className="text-sm leading-6 text-foreground/80">
                            {project.detailDescription ||
                                project.listDescription}
                        </p>
                    </section>

                    {project.stack?.length ? (
                        <section>
                            <h3 className="mb-3 font-display text-[11px] font-bold uppercase tracking-widest text-foreground/55 sm:text-xs">
                                Tech Stack
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((stack) => (
                                    <span
                                        key={stack}
                                        className="border-2 border-border px-2.5 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-wide shadow-[2px_2px_0_#0A0A0A] sm:text-xs"
                                        style={getStackBadgeStyle(stack)}
                                    >
                                        {stack}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ) : null}

                    {hasLivePreview || codeUrl ? (
                        <div className="flex flex-wrap gap-3 border-t-2 border-border pt-4">
                            {hasLivePreview ? (
                                <a
                                    className="neo-btn inline-flex min-h-11 items-center justify-center bg-primary px-4 text-xs font-bold uppercase text-foreground sm:text-sm"
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Project
                                </a>
                            ) : null}
                            {codeUrl ? (
                                <a
                                    className="neo-btn inline-flex min-h-11 items-center justify-center bg-foreground px-4 text-xs font-bold uppercase text-primary sm:text-sm"
                                    href={codeUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Source Code
                                </a>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            </article>
        </div>,
        document.body,
    );
};

export default ProjectDetailModal;
