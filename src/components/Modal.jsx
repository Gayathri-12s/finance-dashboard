const Modal = ({ show, message, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop-custom">
      <div className="modal-box">
        <p>{message}</p>

        <div className="d-flex justify-content-end gap-2 mt-3">
          {onConfirm && (
            <button className="btn btn-danger" onClick={onConfirm}>
              Confirm
            </button>
          )}

          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;