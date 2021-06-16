import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose}) {
  

  return (
    <PopupWithForm
      title='Новое место'
      name='form_add-element'
      textButtonSubmit='Сохранить'
      isOpen={isOpen}
      onClose={onClose} >
        <input
          type="text"
          name="name"
          //value={name}
          id="popup__form-text"
          className="form__item form__item_input_text"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required/>
        <span
          className="form__item-error popup__form-text-error form__span-input-error"></span>
        <input
          type="url"
          name="link"
          //value={link}
          
          id="popup__form-link"
          className="form__item form__item_input_photo"
          placeholder="Ссылка на картинку"
          required />
        <span
          className="form__item-error popup__form-link-error form__span-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;