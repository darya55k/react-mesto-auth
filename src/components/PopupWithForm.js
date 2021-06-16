import React from 'react';
import Close from "../images/Close-popup.svg"


function PopupWithForm ({title, name, children, textbuttonSubmit, isOpen, onClose, onSubmit}){
    return (
        <div className={`popup ${isOpen ? 'popup_open': ''}`}>
                <div className="popup__overlay"></div>
                <div className="popup__content">
                    <button type="button" className="popup__close-icon popup__close-profile"><img className="popup__close-pic" src={Close} alt="Закрыть" onClick={onClose}/></button>
                    <form name={name} className="form " >
                        <div className="form__main-container">
                            <h2 className="form__heading">{title}</h2>
                            {children}
                            
                            <div className="form__handlers">
                                <button type="submit" name="buttonSave" className="form__button">Сохранить</button>
                            </div> 
                        </div>
                    </form>
                </div>
            </div>
    )
}
export default PopupWithForm;