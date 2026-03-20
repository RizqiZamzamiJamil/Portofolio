import "./Style.css";

const ConfirmationModal = ({ show, handleClose, handleConfirm }) => {
    if (!show) {
        return null;
    }

    return (
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
};

export default ConfirmationModal;
