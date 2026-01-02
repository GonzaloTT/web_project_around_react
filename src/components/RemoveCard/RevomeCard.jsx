function RemoveCard({ card, onCardDelete }) {

  function handleDelete() {
    onCardDelete(card);
  }

  return (
    <button
      className="card__button card__button_trash"
      aria-label="Delete card"
      type="button"
      onClick={handleDelete}
    />
  );
}

export default RemoveCard;
