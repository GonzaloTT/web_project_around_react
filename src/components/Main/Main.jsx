import { useState, useEffect } from "react";

import person from "../../../images/Person.png";
import editButton from "../../../images/Edit_Button.svg";
import addButton from "../../../images/Add_Button.svg";

import Card from "../Main/components/Card/Card"
import Popup from "../Main/components/Popup/Popup";
import NewCard from "../NewCard/form/NewCard";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../Avatar/EditAvatar"
import api from "../../utils/api";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = { title: "Editar perfil", children: <EditProfile /> };
  const editAvatarPopup = { title: "Cambiar foto de perfil", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
  api.getInitialCards()
    .then((cardsFromServer) => {
      setCards(cardsFromServer);
    })
    .catch((err) => {
      console.error(err);
    });
  }, []);


    return (
        <main className="content">
              <section className="content__profile">
                  <div className="content__avatar_container">
                    <img
                      src={person}
                      alt="Person"
                      className="content__image content__avatar"
                    />
                    <button
                      className="content__button content__button_avatar_edit"
                      onClick={() => handleOpenPopup(editAvatarPopup)}
                    ></button>
                  </div>
                  <div className="content__info">
                    <h1 className="content__name">Jacques Cousteau</h1>
                    <h4 className="content__job">Explorador</h4>
                  </div>
                  <button 
                  className="content__button content__button_edit"
                  onClick={() => handleOpenPopup(editProfilePopup)}
                  >
                    <img
                      src={editButton}
                      alt="Edit_Button"
                      className="content__button content__button_edit_image"
                    />
                  </button>
                  <button 
                  className="content__button content__button_add"
                  onClick={() => handleOpenPopup(newCardPopup)}
                  >
                    <img
                      src={addButton}
                      alt="Add_button"
                      className="content__button content__button_add_image"
                    />
                  </button>
              </section>

              <section className="cards">
              {cards.map(card => (
                <Card key={card._id} card={card} onCardClick={handleOpenPopup} />
              ))}
              </section>

              {popup && (
                <Popup onClose={handleClosePopup} title={popup.title}>
                  {popup.children}
                </Popup>
          )}
        </main>
    );
}

export default Main