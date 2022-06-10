import React from "react";

function Main() {
    const handleEditAvatarClick = () => {
        document.querySelector("#avatar").classList.add("popup_opened");
    };
    const handleEditProfileClick = () => {
        document.querySelector("#profile").classList.add("popup_opened");
    };
    const handleAddPlaceClick = () => {
        document.querySelector("#create-card").classList.add("popup_opened");
    }
    return (
        <main>
            <section className="profile">
                <button type="button" className="profile__edit-avatar" onClick={handleEditAvatarClick}>
                    <img className="profile__avatar" src="#" alt="Загружаю ..."/>
                </button>
                <div className="profile__info">
                    <h1 className="profile__nick-name">Загружаю ...</h1>
                    <button type="button" className="profile__edit" onClick={handleEditProfileClick}>
                    </button>
                    <p className="profile__profession">Загружаю ...</p>
                </div>
                <button type="button" className="profile__add-photo" onClick={handleAddPlaceClick}></button>
            </section>
            <section className="photo-grid" id="card-list"></section>
        </main>
    );
};

export default Main;