import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.dataCard);
  }
  return (
    <div className="card">
      <img
        className="card__image"
        src={props.dataCard.link}
        alt={props.dataCard.name}
        onClick={handleClick}
      />
      <div className="card__title-wrap">
        <h2 className="card__title">{props.dataCard.name}</h2>
        <div className="card__like-box">
          <button type="button" className="card__like-button"></button>
          <span className="card__like-counter">
            {props.dataCard.likes.length}
          </span>
        </div>
      </div>
      <button
        type="button"
        className="card__delete-button card__delete-button_show"
        onClick={props.onDeleteCard}
      ></button>
    </div>
  );
}

export default Card;
