import React from "react";

function Card() {
    return(
        <div className="card">
            <img className="card__image" src="#" alt="#" />
            <div className="card__title-wrap">
            <h2 className="card__title">#</h2>
            <div className="card__like-box">
            <button type="button" className="card__like-button"></button>
            <span className="card__like-counter"></span>
            </div>
            </div>
            <button type="button" className="card__delete-button"></button>
        </div>
    );
};

export default Card;