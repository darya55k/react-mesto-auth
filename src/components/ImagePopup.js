import React from 'react'
function ImagePopup(props){
    return(
        <div className={`popup ${props.card ? 'popup_open' : ''}`}>
                <div className="popup__overlay popup__overlay-photo"></div>
                <div className="popup__content-profile">
                    <button type="button" className="popup__close-icon popup__close-photo"><img className="popup__close-pic" onClick={props.onClose} /></button>
                    <img className="popup__photo" alt={props.card.name} src={props.card.link} />
                    <p className="popup__text">{props.card.name}</p>
                </div>
            </div>
    )
}
export default ImagePopup