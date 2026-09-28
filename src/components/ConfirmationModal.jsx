import { useEffect } from "react";
import { createPortal } from "react-dom";

const ConfirmationModal = ({ show, handleClose, handleConfirm }) => {
    useEffect(() => {
        if (!show) return undefined;
        const previousOverflow = document.body.style.overflow;
        const handleEscape = (event) => {
            if (event.key === "Escape") handleClose();
        };
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleEscape);
        };
    }, [show, handleClose]);

    if (!show) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-foreground/60 p-4"
            onClick={handleClose}
            role="presentation"
        >
            <div
                className="w-full max-w-lg rounded-lg border-[2.5px] border-border bg-card p-5 shadow-[8px_8px_0_#0A0A0A] sm:p-7"
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <span className="inline-flex rounded border-2 border-border bg-primary px-3 py-1.5 font-display text-xs font-semibold">
                    WhatsApp Confirmation
                </span>
                <h2 className="mt-4 font-display text-lg leading-relaxed sm:text-xl" id="confirm-modal-title">
                    Kirim pesan sekarang?
                </h2>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                    Setelah dikonfirmasi, pesan akan diarahkan ke WhatsApp agar percakapan bisa langsung lanjut.
                </p>
                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                    <button
                        onClick={handleClose}
                        type="button"
                        className="min-h-11 rounded border-2 border-border bg-card px-4 text-sm font-bold hover:bg-muted"
                    >
                        Batal
                    </button>
                    <button
                        onClick={handleConfirm}
                        type="button"
                        className="min-h-11 rounded border-2 border-border bg-primary px-4 text-sm font-bold shadow-[3px_3px_0_#0A0A0A] hover:shadow-[4px_4px_0_#0A0A0A]"
                    >
                        Kirim via WhatsApp
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default ConfirmationModal;
