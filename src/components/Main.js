import React from "react";
import Card from "./Card";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const userInfo = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    api
      .getAllCard()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <section className="profile">
        <button
          type="button"
          className="profile__edit-avatar"
          onClick={props.onEditAvatar}
        >
          <img className="profile__avatar" src={userInfo.avatar} alt="Аватар" />
        </button>
        <div className="profile__info">
          <h1 className="profile__nick-name">{userInfo.name}</h1>
          <button
            type="button"
            className="profile__edit"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__profession">{userInfo.about}</p>
        </div>
        <button
          type="button"
          className="profile__add-photo"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="photo-grid" id="card-list">
        {cards.map((dataCard) => (
          <Card
            key={dataCard._id}
            dataCard={dataCard}
            onCardClick={props.onCardClick}
            onDeleteCard={props.onDeleteCard}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
