import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm title="Обновить аватар" name="form_update-avatar" textButtonSubmit="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
            <input type="url" name="link" id="link-avatar-input" className="form__item form__item_input_avatar" placeholder="Ссылка на аватар" required />
            <span className="form__item-error popup__form-avatar-error form__span-input-error"></span>
        </PopupWithForm>
    );
}
export default EditAvatarPopup;
