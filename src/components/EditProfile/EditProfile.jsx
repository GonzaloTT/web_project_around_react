function EditProfile() {
    return(
        <>
            <form
              className="popup__content"
              id="form"
              name="edit-profile"
              noValidate
            >

              <fieldset className="popup__form">
                <input
                  type="text"
                  className="popup__input"
                  placeholder="Nombre"
                  id="name_input"
                  name="name_input"
                  minLength="2"
                  maxLength="40"
                  required
                />

                <span
                  className="popup__input popup__input_error"
                  id="name_input-error"
                ></span>

                <input
                  type="text"
                  className="popup__input"
                  placeholder="Acerca de mi"
                  id="about_input"
                  name="about_input"
                  minLength="2"
                  maxLength="200"
                  required
                />
                <span
                  className="popup__input popup__input_error"
                  id="about_input-error"
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

export default EditProfile