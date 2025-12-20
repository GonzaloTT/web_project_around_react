import ImagePopup from "../../../ImagePopup/ImagePopup";

function Card({card, onCardClick}) {
    const { name, link, isLiked } = card;

    const imageComponent = {
    title: null,
    children: <ImagePopup card={card} />,
  };

    return(
        <li className="card">
        <button
        className="card__button card__button_trash"
        aria-label="Delete card"
        type="button"
        />
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
            className={`card__button card__button_like ${
              isLiked ? "card__button_like_active" : ""
            }`}
            aria-label="Like card"
            type="button"
          />
          <span className="card__like_count">0</span>
        </div>
        </div>
        </li>
    )
}

export default Card