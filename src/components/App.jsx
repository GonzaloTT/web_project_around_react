import { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
      .catch(console.error);

    api.getInitialCards()
      .then(setCards)
      .catch(console.error);
  }, []);

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  function handleUpdateUser(data) {
  api.updateUserInfo(data)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      handleClosePopup();
    })
    .catch(console.error);
  }

  function handleUpdateAvatar(avatarLink) {
  api.updateAvatar(avatarLink)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      handleClosePopup();
    })
    .catch(console.error);
  }

  function handleAddPlaceSubmit(data) {
  api.addCard(data)
    .then((newCard) => {
      setCards((cards) => [newCard, ...cards]);
      handleClosePopup();
    })
    .catch(console.error);
  }


   function handleCardLike(card) {
    const isLiked = card.likes.some(
      (user) => user._id === currentUser._id
    );

    const request = isLiked
      ? api.removeLike(card._id)
      : api.addLike(card._id);

    request
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => c._id === card._id ? newCard : c)
        );
      })
      .catch(console.error);
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((c) => c._id !== card._id)
        );
      })
      .catch(console.error);
  }

  return (
    <>
    <CurrentUserContext.Provider value={{currentUser, handleUpdateUser, handleUpdateAvatar}}>
    <div className="page">
      <Header />
      <Main 
        popup={popup}
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        onAddPlaceSubmit={handleAddPlaceSubmit}
      />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App
