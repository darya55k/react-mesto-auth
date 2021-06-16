import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpen, onClose}) {
  

  return(
      <PopupWithForm
      title='Обновить аватар'
      name='form_update-avatar'
      textButtonSubmit='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
      >
        <input
          
          type="url"
          name="link"
          id="link-avatar-input"
          className="form__item form__item_input_avatar"
          placeholder="Ссылка на аватар"
          required />
        <span
          className="form__item-error popup__form-avatar-error form__span-input-error"></span>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;