import "./Style.css";

const ConfirmationModal = ({ show, handleClose, handleConfirm }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName} >
            <div className="modal-dialog" role="document">
                <div className="modal-content rounded-3 shadow">
                    <div className="modal-body p-4 text-center">
                        <h4>Confirm Message Submit</h4>
                        <p>Are you sure to send your message?</p>
                    </div>
                    <div className="modal-footer flex-nowrap p-0">
                        <button onClick={handleConfirm} type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end true"><strong>Yes, submit</strong></button>
                        <button onClick={handleClose} type="button" className="btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 false" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
