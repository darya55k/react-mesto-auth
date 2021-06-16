import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
function App() {
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);



  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
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
  
  return (
    <div className="root">
        <div className="page">
            <Header/>
            <Main
            
            onEditAvatar={handleEditAvatarClick}
         onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
            
            
            
            />

<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
<EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
<ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
            <Footer/>
            
            </div>
            </div>
    


  );
}

export default App;
