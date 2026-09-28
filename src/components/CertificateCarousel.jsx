import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { certificateGroups, profile } from "../data/portfolioData";

const getPageLabel = (side) =>
    side === "back" ? "Halaman Belakang" : "Halaman Depan";

const CertificateCarousel = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const dialogRef = useRef(null);
    const closeButtonRef = useRef(null);
    const openerRef = useRef(null);

    useEffect(() => {
        if (!selectedCertificate) return undefined;

        const previousOverflow = document.body.style.overflow;
        const previousPaddingRight = document.body.style.paddingRight;
        const scrollbarWidth =
            window.innerWidth - document.documentElement.clientWidth;
        const currentPaddingRight =
            Number.parseFloat(
                window.getComputedStyle(document.body).paddingRight,
            ) ||
            0;
        const focusFrame = requestAnimationFrame(() =>
            closeButtonRef.current?.focus(),
        );
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
                return;
            }

            if (event.key !== "Tab") return;

            const focusableElements = dialogRef.current?.querySelectorAll(
                'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
            );
            if (!focusableElements?.length) return;

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (
                event.shiftKey &&
                (document.activeElement === firstElement ||
                    !dialogRef.current.contains(document.activeElement))
            ) {
                event.preventDefault();
                lastElement.focus();
            } else if (
                !event.shiftKey &&
                (document.activeElement === lastElement ||
                    !dialogRef.current.contains(document.activeElement))
            ) {
                event.preventDefault();
                firstElement.focus();
            }
        };

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
        }
        window.addEventListener("keydown", handleEscape);

        return () => {
            cancelAnimationFrame(focusFrame);
            document.body.style.overflow = previousOverflow;
            document.body.style.paddingRight = previousPaddingRight;
            window.removeEventListener("keydown", handleEscape);
            if (openerRef.current?.isConnected) openerRef.current.focus();
        };
    }, [selectedCertificate]);

    const openCertificate = (certificate, trigger) => {
        openerRef.current = trigger;
        setActiveImageIndex(0);
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const selectedGroup = certificateGroups.find(
        (group) => group.title === selectedCertificate?.category,
    );
    const certificateImages = selectedCertificate?.images ?? [];
    const activeImage = certificateImages[activeImageIndex];
    const imageFrameClass =
        selectedCertificate?.orientation === "portrait"
            ? "aspect-[210/297] max-w-[420px]"
            : "aspect-[297/210] max-w-full";

    return (
        <section
            className="scroll-mt-24 border-t-[2.5px] border-border bg-muted py-14 sm:py-16 lg:py-20"
            id="certificates"
        >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
                <div className="mb-8 max-w-2xl">
                    <span className="inline-flex border-2 border-border bg-foreground px-3 py-2 font-display text-xs font-bold uppercase tracking-[0.12em] text-primary shadow-[3px_3px_0_var(--foreground)]">
                        Credentials
                    </span>
                    <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
                        Sertifikat &amp; Penghargaan
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-foreground/70 sm:text-base">
                        Bukti kompetensi, pencapaian, dan proses belajar saya.
                    </p>
                </div>

                <div className="space-y-9">
                    {certificateGroups.map((group) => (
                        <section
                            key={group.title}
                            aria-labelledby={`certificate-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <span
                                    className="inline-flex size-9 shrink-0 items-center justify-center border-2 border-border text-base shadow-[2px_2px_0_var(--foreground)]"
                                    style={{
                                        backgroundColor: group.color,
                                        color: group.textColor,
                                    }}
                                    aria-hidden="true"
                                >
                                    <i className={group.icon} />
                                </span>
                                <h3
                                    className="font-display text-lg font-extrabold sm:text-xl"
                                    id={`certificate-${group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                >
                                    {group.title}
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                                {group.items.map((certificate, index) => (
                                    <motion.article
                                        key={certificate.title}
                                        className="neo-card flex min-w-0 flex-col bg-card"
                                        initial={{ opacity: 0, y: 14 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: 0.32,
                                            delay: index * 0.035,
                                        }}
                                    >
                                        <div
                                            className="h-2 border-b-2 border-border"
                                            style={{
                                                backgroundColor: group.color,
                                            }}
                                            aria-hidden="true"
                                        />
                                        <div className="flex flex-1 flex-col p-4 sm:p-5">
                                            <span className="font-display text-[10px] font-bold uppercase tracking-widest text-foreground/45">
                                                {certificate.issuedAt}
                                            </span>
                                            <h4 className="mt-1 font-display text-base font-extrabold leading-snug">
                                                {certificate.title}
                                            </h4>
                                            <p className="mt-1 text-xs font-semibold text-blue">
                                                {certificate.issuer}
                                            </p>
                                            <p className="mt-2 flex-1 text-xs leading-relaxed text-foreground/65">
                                                {certificate.focus}
                                            </p>
                                            <button
                                                type="button"
                                                className="neo-btn mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-foreground px-3 text-xs font-bold uppercase tracking-wider text-primary"
                                                onClick={(event) =>
                                                    openCertificate(
                                                        certificate,
                                                        event.currentTarget,
                                                    )
                                                }
                                            >
                                                Lihat Detail
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </button>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>

                <a
                    href={profile.certificateCollectionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-btn mt-8 inline-flex min-h-11 items-center gap-2 bg-primary px-4 text-sm font-bold text-foreground"
                >
                    Buka koleksi lengkap
                    <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                    />
                </a>
            </div>

            {createPortal(
                <AnimatePresence
                    onExitComplete={() => setSelectedCertificate(null)}
                >
                    {isModalOpen && selectedCertificate ? (
                          <motion.div
                              key="certificate-modal"
                              className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-foreground/85 p-3 sm:p-5"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setIsModalOpen(false)}
                          >
                              <motion.article
                                  ref={dialogRef}
                                  className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto border-[2.5px] border-border bg-card shadow-[8px_8px_0_var(--foreground)]"
                                  role="dialog"
                                  aria-modal="true"
                                  aria-labelledby="certificate-modal-title"
                                  initial={{ opacity: 0, y: 16, scale: 0.985 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 16, scale: 0.985 }}
                                  transition={{ duration: 0.2 }}
                                  onClick={(event) => event.stopPropagation()}
                              >
                                  <header
                                      className="flex items-center justify-between gap-3 border-b-2 border-border px-4 py-3 sm:px-6"
                                      style={{
                                          backgroundColor:
                                              selectedGroup?.color ??
                                              "var(--primary)",
                                          color:
                                              selectedGroup?.textColor ??
                                              "var(--primary-foreground)",
                                      }}
                                  >
                                      <div className="flex min-w-0 items-center gap-3">
                                          <i
                                              className={`${selectedGroup?.icon ?? "fa-solid fa-certificate"} shrink-0`}
                                              aria-hidden="true"
                                          />
                                          <span className="truncate font-display text-xs font-bold uppercase tracking-widest">
                                              {selectedCertificate.category}
                                          </span>
                                      </div>
                                      <button
                                          ref={closeButtonRef}
                                          type="button"
                                          className="inline-flex size-11 shrink-0 items-center justify-center border-2 border-border bg-foreground text-xl text-white transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                                          onClick={() => setIsModalOpen(false)}
                                          aria-label="Tutup detail sertifikat"
                                      >
                                          <i
                                              className="fa-solid fa-xmark"
                                              aria-hidden="true"
                                          />
                                      </button>
                                  </header>

                                  <div className="space-y-5 p-4 sm:space-y-6 sm:p-6">
                                      <div>
                                          {certificateImages.length > 1 && (
                                              <div
                                                  className="mb-3 grid grid-cols-2 gap-2"
                                                  role="group"
                                                  aria-label="Pilih halaman sertifikat"
                                              >
                                                  {certificateImages.map(
                                                      (image, index) => {
                                                          const isActive =
                                                              index ===
                                                              activeImageIndex;

                                                          return (
                                                              <button
                                                                  key={`${image.side}-${index}`}
                                                                  type="button"
                                                                  className={`min-h-11 border-2 border-border px-2 text-[10px] font-bold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${isActive ? "bg-foreground text-primary" : "bg-card text-foreground hover:bg-muted"}`}
                                                                  onClick={() =>
                                                                      setActiveImageIndex(
                                                                          index,
                                                                      )
                                                                  }
                                                                  aria-pressed={
                                                                      isActive
                                                                  }
                                                              >
                                                                  {getPageLabel(
                                                                      image.side,
                                                                  )}
                                                              </button>
                                                          );
                                                      },
                                                  )}
                                              </div>
                                          )}

                                          <div
                                              className={`neo-border mx-auto grid w-full place-items-center overflow-hidden bg-muted p-1 ${imageFrameClass}`}
                                              style={{
                                                  boxShadow:
                                                      "4px 4px 0 var(--foreground)",
                                              }}
                                          >
                                              {activeImage ? (
                                                  <img
                                                      className="h-full w-full object-contain"
                                                      src={activeImage.src}
                                                      alt={`${selectedCertificate.title} — ${getPageLabel(activeImage.side).toLowerCase()}`}
                                                  />
                                              ) : null}
                                          </div>
                                          <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-foreground/55">
                                              {getPageLabel(activeImage?.side)}{" "}
                                              —{" "}
                                              {selectedCertificate.orientation ===
                                              "portrait"
                                                  ? "A4 Portrait"
                                                  : "A4 Landscape"}
                                          </p>
                                      </div>

                                      <div>
                                          <h3
                                              className="font-display text-lg font-extrabold leading-snug sm:text-xl"
                                              id="certificate-modal-title"
                                          >
                                              {selectedCertificate.title}
                                          </h3>
                                          <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                              {[
                                                  {
                                                      label: "Tahun",
                                                      value: selectedCertificate.issuedAt,
                                                  },
                                                  {
                                                      label: "Diterbitkan oleh",
                                                      value: selectedCertificate.issuer,
                                                  },
                                              ].map((detail) => (
                                                  <div
                                                      className="neo-border bg-muted p-3 shadow-[2px_2px_0_var(--foreground)]"
                                                      key={detail.label}
                                                  >
                                                      <p className="font-display text-[9px] font-bold uppercase tracking-widest text-foreground/45">
                                                          {detail.label}
                                                      </p>
                                                      <p className="mt-0.5 text-sm font-semibold">
                                                          {detail.value}
                                                      </p>
                                                  </div>
                                              ))}
                                          </div>
                                      </div>

                                      <div>
                                          <p className="mb-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-foreground/45">
                                              Deskripsi
                                          </p>
                                          <p className="text-sm leading-relaxed text-foreground/75">
                                              {selectedCertificate.focus}
                                          </p>
                                      </div>
                                  </div>
                              </motion.article>
                          </motion.div>
                    ) : null}
                </AnimatePresence>,
                document.body,
            )}
        </section>
    );
};

export default CertificateCarousel;
