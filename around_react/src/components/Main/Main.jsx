import person from "../../../images/Person.png";
import editButton from "../../../images/Edit_Button.svg";
import addButton from "../../../images/Add_Button.svg";

function Main() {
    return (
        <>
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
                </div>
        </>
    )
}

export default Main