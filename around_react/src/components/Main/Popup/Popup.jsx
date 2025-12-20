function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <div className="popup popup_opened">
        <div className="popup__container">
            <button 
            className="popup__button popup__button_close" 
            type="button"
            aria-label="Close"
            onClick={onClose}
            >
                🞩
            </button>
        <div className="popup__content">
            <h3 className="popup__title">{title}</h3>
            {children}
        </div>
        </div>
    </div>
  )
}

export default Popup