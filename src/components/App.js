import React from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [currentUser, setCurrentUser] = React.useState({});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cards]) => {
                setCurrentUser(userData);
                setCards(cards);
            })
            .catch((err) => console.log(err));
    }, []);
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }
    function handleCardLike(card) {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);

        api.setLikeStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
            })
            .catch((error) => console.log(error));
    }

    function handleCardDelete(card) {
        api.removeCard(card._id)
            .then(() => {
                setCards((state) => state.filter((c) => c._id !== card._id));
            })
            .catch((error) => console.log(error));
    }

    function handleUpdateUser(FormData) {
        api.updateUserInfo(FormData)
            .then((userData) => {
                setCurrentUser(userData);
                closeAllPopups();
            })
            .catch((error) => console.log(error));
    }

    function handleUpdateAvatar(formData) {
        api.setAvatar(formData)
            .then((res) => {
                setCurrentUser(res);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
    }

    function handleAddPlaceSubmit(formData) {
        api.createCard(formData)
            .then((res) => {
                setCards([res, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(`Ошибка: ${err}`));
    }

    return (
        <div className="root">
            <div className="page">
                <CurrentUserContext.Provider value={currentUser}>
                    <Header />
                    <Main
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                        cards={cards}
                    />

                    <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
                    <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                    <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
                    <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
                    <Footer />
                </CurrentUserContext.Provider>
            </div>
        </div>
    );
}

export default App;
