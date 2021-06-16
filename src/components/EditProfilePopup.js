import React from 'react';

import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  

  return (
    <PopupWithForm
          title='Редактировать профиль'
          name='popup-profile'
          textButtonSubmit='Сохранить'
          isOpen={isOpen}
          onClose={onClose}>
            <input
              type="text"
              name="name"
              id="form-profile"
              className="form__item form__item_input_title"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              //value={name}
             
              required/>
            <span
              className="form__item-error popup__form-title-error form__span-input-error"></span>
            <input
              type="text"
              name="about"
              id="popup__form-subtitle"
              className="form__item form__item_input_subtitle"
              placeholder="Занятие"
              minLength="2"
              maxLength="200"
             //value={description}
              
              required/>
            <span
              className="form__item-error popup__form-subtitle-error form__span-input-error"></span>
        </PopupWithForm>
  );
}

export default EditProfilePopup;
