import logo from "../images/Around.svg";
import vector from "../images/Vector.svg";
import person from "../images/Person.png";
import editButton from "../images/Edit_Button.svg";
import addButton from "../images/Add_Button.svg";
import footer from "../images/Footer.svg";

function App() {
  return (
    <>
    <div className="page">
      <header className="header">
        <img
          src={logo}
          alt="Around_The_U.S."
          className="header__title"
        />
        <img src={vector} alt="Vector" className="header__element" />
      </header>
      <div class="content">
      <section className="content__profile">
          <div className="content__avatar_container">
            <img
              src={person}
              alt="Person"
              className="content__image content__avatar"
            />
            <button
              className="content__button content__button_avatar_edit"
            ></button>
          </div>
          <div className="content__info">
            <h1 className="content__name">Jacques Cousteau</h1>
            <h4 className="content__job">Explorador</h4>
          </div>
          <button className="content__button content__button_edit">
            <img
              src={editButton}
              alt="Edit_Button"
              className="content__button content__button_edit_image"
            />
          </button>
          <button className="content__button content__button_add">
            <img
              src={addButton}
              alt="Add_button"
              className="content__button content__button_add_image"
            />
          </button>
        </section>
        <footer class="footer">
        <img src={footer} alt="Footer" className="footer__image" />
        </footer>
        </div>
        </div>
    </>
  )
}

export default App
