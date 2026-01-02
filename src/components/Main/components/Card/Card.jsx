import { useContext } from "react";
import ImagePopup from "../../../ImagePopup/ImagePopup";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
import RemoveCard from "../../../../components/RemoveCard/RevomeCard";

function Card({card, onCardClick, onCardLike, onCardDelete }) {
    const { currentUser } = useContext(CurrentUserContext);
    const { name, link, likes = [] } = card;

    function handleLikeClick() {
    onCardLike(card);
  }

    const isLiked = likes.some(
    (user) => user._id === currentUser?._id
  );

  const cardLikeButtonClassName = `card__button card__button_like ${
  isLiked ? "card__button_like_active" : ""
  }`;

    const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />,
  };

    return(
        <li className="card">
        <RemoveCard card={card} onCardDelete={onCardDelete} />
        <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(imageComponent)}
        />
        <div className="card__info">
        <p className="card__text">{name}</p>

        <div className="card__like_container">
          <button
            className={cardLikeButtonClassName}
            aria-label="Like card"
            type="button"
            onClick={handleLikeClick}
          />
          <span className="card__like_count">{likes.length}</span>
        </div>
        </div>
        </li>
    )
}

export default Card