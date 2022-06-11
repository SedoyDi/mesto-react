import React from "react";
import Card from "./Card";

function Main(props) {
    return (
        <main>
            <section className="profile">
                <button type="button" className="profile__edit-avatar" onClick={props.onEditAvatar}>
                    <img className="profile__avatar" src={props.userInfo.avatar} alt="Аватар"/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__nick-name">{props.userInfo.name}</h1>
                    <button type="button" className="profile__edit" onClick={props.onEditProfile}>
                    </button>
                    <p className="profile__profession">{props.userInfo.about}</p>
                </div>
                <button type="button" className="profile__add-photo" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-grid" id="card-list">
                {props.cardList.map((dataCard) => <Card 
                key={dataCard._id}
                dataCard = {dataCard}
                onCardClick = {props.onCardClick}
                onDeleteCard = {props.onDeleteCard} 
                />)}
            </section>
        </main>
    );
};

export default Main;