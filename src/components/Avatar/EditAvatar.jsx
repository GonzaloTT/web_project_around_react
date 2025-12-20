function EditAvatar() {
    return (
        <>
        <form className="popup__content" name="edit-avatar" noValidate>
              <fieldset className="popup__form">
                <input
                  type="url"
                  className="popup__input"
                  placeholder="Enlace a la imagen"
                  id="avatar_input"
                  name="avatar_input"
                  required
                />
                <span
                  className="popup__input popup__input_error"
                  id="avatar_input-error"
                ></span>
              </fieldset>

              <fieldset className="popup__form">
                <button className="popup__button popup__button_save" type="submit">
                  Guardar
                </button>
              </fieldset>
            </form>
        </>
    )
}

export default EditAvatar