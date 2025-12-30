import { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
  api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData);
    })
    .catch(console.error);
  }, []);


  return (
    <>
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
    </CurrentUserContext.Provider>
    </>
  )
}

export default App
