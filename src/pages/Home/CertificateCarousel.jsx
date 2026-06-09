import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { certificateGroups, profile } from "../../data/portfolioData";
import "./Certificate.css";

const getCertificateOrientation = (certificate) =>
    certificate.orientation === "portrait" ? "portrait" : "landscape";

const CertificateCarousel = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

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
        <section className="section-shell certificates-section" id="certificates">
            <div className="container">
                <div className="section-heading section-heading--left">
                    <span className="section-heading__eyebrow">Certificates</span>
                    <h2 className="section-heading__title">
                        Sertifikat dan pelatihan.
                    </h2>
                    <p className="section-heading__description">
                        Bukti pembelajaran formal dan pelatihan teknis yang
                        melengkapi pengalaman project saya.
                    </p>
                </div>

                <div className="certificate-groups">
                    {certificateGroups.map((group) => (
                        <section
                            className="certificate-group"
                            key={group.title}
                            aria-labelledby={`certificate-${group.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                        >
                            <h3
                                className="certificate-group__title"
                                id={`certificate-${group.title
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`}
                            >
                                {group.title}
                            </h3>

                            <div className="certificates-list">
                                {group.items.map((certificate, index) => (
                                    <motion.article
                                        key={certificate.title}
                                        className="certificate-item"
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.04,
                                        }}
                                    >
                                        <div className="certificate-item__icon">
                                            <i
                                                className={
                                                    certificate.isHighlighted
                                                        ? "fa-solid fa-award"
                                                        : "fa-solid fa-certificate"
                                                }
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                        <div className="certificate-item__copy">
                                            <span>
                                                {certificate.issuer} -{" "}
                                                {certificate.issuedAt}
                                            </span>
                                            <h4>{certificate.title}</h4>
                                            <p>{certificate.focus}</p>
                                        </div>
                                        <button
                                            type="button"
                                            className="certificate-item__button"
                                            onClick={() =>
                                                setSelectedCertificate(certificate)
                                            }
                                        >
                                            Lihat detail
                                            <i
                                                className="fa-solid fa-arrow-right"
                                                aria-hidden="true"
                                            ></i>
                                        </button>
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
                    className="certificates-collection-link"
                >
                    Buka koleksi lengkap
                    <i
                        className="fa-solid fa-arrow-up-right-from-square"
                        aria-hidden="true"
                    ></i>
                </a>
            </div>

            {selectedCertificate
                ? createPortal(
                      <AnimatePresence>
                          <motion.div
                              className="certificate-modal"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={() => setSelectedCertificate(null)}
                          >
                              <motion.article
                                  className={`certificate-modal__dialog certificate-modal__dialog--${getCertificateOrientation(
                                      selectedCertificate
                                  )}`}
                                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 18, scale: 0.98 }}
                                  transition={{ duration: 0.22 }}
                                  onClick={(event) => event.stopPropagation()}
                              >
                                  <button
                                      type="button"
                                      className="certificate-modal__close"
                                      onClick={() => setSelectedCertificate(null)}
                                      aria-label="Tutup detail sertifikat"
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
                                      <span className="section-heading__eyebrow">
                                          Certificate Detail
                                      </span>
                                      <h3>{selectedCertificate.title}</h3>
                                      <p>{selectedCertificate.focus}</p>
                                      <div className="certificate-modal__meta">
                                          <span>{selectedCertificate.issuer}</span>
                                          <span>{selectedCertificate.issuedAt}</span>
                                      </div>
                                  </div>
                              </motion.article>
                          </motion.div>
                      </AnimatePresence>,
                      document.body
                  )
                : null}
        </section>
    );
};

export default CertificateCarousel;
