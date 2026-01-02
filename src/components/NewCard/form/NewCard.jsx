import { useRef } from "react";

function NewCard({ onAddPlaceSubmit }) {
  const titleRef = useRef();
  const urlRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlaceSubmit({
      name: titleRef.current.value,
      link: urlRef.current.value,
    });
  }

    return (
        <>
        <form className="popup__content" name="add-card" noValidate onSubmit={handleSubmit}>
              <fieldset className="popup__form">
                <input
                  type="text"
                  className="popup__input"
                  placeholder="Titulo"
                  id="title_input"
                  name="title_input"
                  minLength="2"
                  maxLength="30"
                  required
                  ref={titleRef}
                />
                <span
                  className="popup__input popup__input_error"
                  id="title_input-error"
                ></span>

                <input
                  type="url"
                  className="popup__input"
                  placeholder="Enlace a la imagen"
                  id="url_input"
                  name="url_input"
                  required
                  ref={urlRef}
                />
                <span
                  className="popup__input popup__input_error"
                  id="url_input-error"
                ></span>
              </fieldset>

              <fieldset className="popup__form">
                <button className="popup__button popup__button_save" type="submit">
                  Crear
                </button>
              </fieldset>
            </form>
        </>
    )
}

export default NewCard