import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Style.css";

const ConfirmationModal = ({ show, handleClose, handleConfirm }) => {
    useEffect(() => {
        if (!show) {
            return undefined;
        }

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [show]);

    if (!show) {
        return null;
    }

    const modal = (
        <div className="confirm-modal" onClick={handleClose} role="presentation">
            <div
                className="confirm-modal__dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="confirm-modal__body">
                    <span className="info-chip">WhatsApp Confirmation</span>
                    <h4 id="confirm-modal-title">Kirim pesan sekarang?</h4>
                    <p>
                        Setelah dikonfirmasi, pesan akan diarahkan ke WhatsApp
                        agar percakapan bisa langsung lanjut.
                    </p>
                </div>
                <div className="confirm-modal__footer">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="confirm-modal__button confirm-modal__button--ghost"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleConfirm}
                        type="button"
                        className="confirm-modal__button"
                    >
                        Kirim via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );

    return createPortal(modal, document.body);
};

export default ConfirmationModal;
