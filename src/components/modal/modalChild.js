const Modals = ({ children, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-child">
          <button onClick={onClose} className="close-modal">
            X
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modals;