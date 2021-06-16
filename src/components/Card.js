import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return(
            <li className="cards__item">
                <button type="button" className="cards__button-delete"></button>
                <img className="cards__photo cards__photo-open" src={props.card.link}  alt={props.card.name} onClick={handleClick} />

                <div className="cards__info">
                    <h2 className="cards__text cards__text-photo">{props.card.name}</h2>
                    <div className="cards__like-container">
                        <button type="button" className="cards__button-like"></button>
                        <p className="cards__number-likes">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>
    );
        
}
export default Card;