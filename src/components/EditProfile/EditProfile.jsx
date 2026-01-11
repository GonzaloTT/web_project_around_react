import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function EditProfile() {
  const { currentUser, handleUpdateUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const [description, setDescription] = useState(currentUser?.about || "");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
  e.preventDefault();

  handleUpdateUser({
    name,
    about: description,
  });
  }

  useEffect(() => {
  if (currentUser) {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }
  }, [currentUser]);


    return(
        <>
            <form
              className="popup__content"
              id="form"
              name="edit-profile"
              noValidate
              onSubmit={handleSubmit}
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
                  value={name}
                  onChange={handleNameChange}
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
                  value={description}
                  onChange={handleDescriptionChange}
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