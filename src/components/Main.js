import React from "react";
import Card from "./Card";
import api from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Иследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState(
    "https://funart.pro/uploads/posts/2021-07/1627507475_8-funart-pro-p-zayats-korol-zhivotnie-krasivo-foto-10.jpg"
  );
  const [cards, setCards] = React.useState([]);
  const userInfo = {
    name: userName,
    about: userDescription,
    avatar: userAvatar,
  };

  React.useEffect(() => {
    api
      .getAllData()
      .then((res) => {
        const [dataCard, dataUser] = res;
        setUserName(dataUser.name);
        setUserDescription(dataUser.about);
        setUserAvatar(dataUser.avatar);
        setCards(dataCard);
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
