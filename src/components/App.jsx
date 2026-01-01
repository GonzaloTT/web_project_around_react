import { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getUserInfo()
      .then(setCurrentUser)
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

  function handleUpdateAvatar(data) {
  api.setUserAvatar(data)
    .then((newUserData) => {
      setCurrentUser(newUserData);
      handleClosePopup();
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
      />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App
