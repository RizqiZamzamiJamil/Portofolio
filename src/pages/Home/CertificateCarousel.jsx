import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { certificates, profile } from "../../data/portfolioData";
import "./Certificate.css";

const spotlightCertificate = certificates[0];

const CertificateCarousel = () => {
    const galleryRef = useRef(null);
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const scrollGallery = (direction) => {
        if (!galleryRef.current) {
            return;
        }

        galleryRef.current.scrollBy({
            left: galleryRef.current.clientWidth * direction * 0.9,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        if (!selectedCertificate) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setSelectedCertificate(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [selectedCertificate]);

    return (
        <section className="section-shell certificates-section">
            <div className="container">
                <div className="section-heading">
                    <span className="section-heading__eyebrow">Certificates</span>
                    <h2 className="section-heading__title">
                        Galeri sertifikat pilihan.
                    </h2>
                    <p className="section-heading__description">
                        Zoom atau geser galeri.
                    </p>
                </div>

                <div className="certificates-layout">
                    <motion.article
                        className="certificate-spotlight content-panel"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="certificate-spotlight__image">
                            <img
                                src={spotlightCertificate.image}
                                alt={spotlightCertificate.title}
                            />
                        </div>
                        <div className="certificate-spotlight__copy">
                            <span className="info-chip">Highlighted Certificate</span>
                            <h3>{spotlightCertificate.title}</h3>
                            <p>{spotlightCertificate.focus}</p>
                            <div className="certificate-spotlight__meta">
                                <span>{spotlightCertificate.issuer}</span>
                                <span>{spotlightCertificate.issuedAt}</span>
                            </div>
                            <div className="certificate-spotlight__actions">
                                <button
                                    type="button"
                                    className="portfolio-button"
                                    onClick={() =>
                                        setSelectedCertificate(spotlightCertificate)
                                    }
                                >
                                    Zoom Certificate
                                </button>
                                <a
                                    href={profile.certificateCollectionUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="portfolio-button portfolio-button--ghost"
                                >
                                    View Collection
                                </a>
                            </div>
                        </div>
                    </motion.article>

                    <motion.article
                        className="certificate-gallery content-panel"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: 0.06 }}
                    >
                        <div className="certificate-gallery__head">
                            <div>
                                <span className="info-chip">Gallery</span>
                                <p>Geser untuk melihat lainnya.</p>
                            </div>
                            <div className="certificate-gallery__controls">
                                <button
                                    type="button"
                                    onClick={() => scrollGallery(-1)}
                                    aria-label="Scroll certificates to the left"
                                >
                                    <i
                                        className="fa-solid fa-chevron-left"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => scrollGallery(1)}
                                    aria-label="Scroll certificates to the right"
                                >
                                    <i
                                        className="fa-solid fa-chevron-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>

                        <div
                            className="certificate-gallery__viewport"
                            ref={galleryRef}
                        >
                            {certificates.map((item) => (
                                <button
                                    key={item.title}
                                    type="button"
                                    className="certificate-gallery__item"
                                    onClick={() => setSelectedCertificate(item)}
                                >
                                    <div className="certificate-gallery__thumb">
                                        <img src={item.image} alt={item.title} />
                                        <span className="certificate-gallery__zoom">
                                            Zoom
                                        </span>
                                    </div>
                                    <div className="certificate-gallery__meta">
                                        <strong>{item.title}</strong>
                                        <span>
                                            {item.issuer} - {item.issuedAt}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.article>
                </div>
            </div>

            {createPortal(
                <AnimatePresence>
                    {selectedCertificate ? (
                        <motion.div
                            className="certificate-modal"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCertificate(null)}
                        >
                            <motion.div
                                className="certificate-modal__dialog"
                                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                                transition={{ duration: 0.22 }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    className="certificate-modal__close"
                                    onClick={() => setSelectedCertificate(null)}
                                    aria-label="Close certificate preview"
                                >
                                    <i
                                        className="fa-solid fa-xmark"
                                        aria-hidden="true"
                                    ></i>
                                </button>

                                <div className="certificate-modal__image">
                                    <img
                                        src={selectedCertificate.image}
                                        alt={selectedCertificate.title}
                                    />
                                </div>
                                <div className="certificate-modal__copy">
                                    <span className="info-chip">
                                        Certificate Preview
                                    </span>
                                    <h3>{selectedCertificate.title}</h3>
                                    <p>{selectedCertificate.focus}</p>
                                    <div className="certificate-modal__meta">
                                        <span>{selectedCertificate.issuer}</span>
                                        <span>{selectedCertificate.issuedAt}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default CertificateCarousel;
