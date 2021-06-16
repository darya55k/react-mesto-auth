import Plus from "../images/profile-plus.svg";
import React from "react";
import api from "../utils/api";
import Card from "../components/Card";
import Edit from "../images/profile-edit-button.svg";

function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={userAvatar} alt="Изображение профиля" />
                </div>
                <div className="profile__info">
                    <div className="profile__text">
                        <h1 className="profile__title">{userName}</h1>
                        <p className="profile__subtitle">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__button-edit" onClick={props.onEditProfile}>
                        <img className="profile__button-pict" src={Edit} alt="Редактировать" />
                    </button>
                </div>
                <button type="button" className="profile__button-add" onClick={props.onAddPlace}>
                    <img className="profile__plus" src={Plus} alt="Добавить" />
                </button>
            </section>

            <section className="elements">
                <ul className="cards">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}
export default Main;
