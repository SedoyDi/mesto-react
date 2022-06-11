import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";

function App() {
    const [userName, setUserName]= React.useState("Жак Ив Кусто");
    const [userDescription, setUserDescription]= React.useState("Иследователь океана");
    const [userAvatar, setUserAvatar]= React.useState("https://funart.pro/uploads/posts/2021-07/1627507475_8-funart-pro-p-zayats-korol-zhivotnie-krasivo-foto-10.jpg");
    const [cards,setCards] = React.useState([]);
    const userInfo = {name:userName, about:userDescription, avatar:userAvatar};

    React.useEffect(()=> {
        api.getAllData()
        .then((res) => {
            const [dataCard, dataUser] = res;
            setUserName (dataUser.name);
            setUserDescription (dataUser.about);
            setUserAvatar (dataUser.avatar);
            setCards(dataCard);
        })
        .catch((err) => {
            console.log(err)
  })}, []);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    
    function handleEditAvatarClick () {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    };

    function handleEditProfileClick () {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    };

    function handleAddPlaceClick () {
        setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    };

    function hadleDeleteCardClick () {
        setIsDeleteCardPopupOpen(!isDeleteCardPopupOpen);
    }

    function closeAllPopups () {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsDeleteCardPopupOpen(false);
        setSelectedCard(null);
    };

    return (
    <>
    <div className="page__content">
        <Header />
        <Main 
        userInfo = {userInfo}
        cardList = {cards}
        onEditAvatar = {handleEditAvatarClick}
        onEditProfile = {handleEditProfileClick}
        onCardClick = {setSelectedCard}
        onAddPlace = {handleAddPlaceClick}
        onDeleteCard = {hadleDeleteCardClick} />
        
        <Footer />
    </div>
    <PopupWithForm
        name = "avatar"
        title = "Обновить аватар"
        textButtonSubmit = "Сохранить"
        isOpen = {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}>
            <input
                type="url"
                name="avatar"
                id="avatar-input"
                className="form__input form__input_avatar-link_position"
                placeholder="Ссылка на аватар"
                minLength={2}
                maxLength={200}
                required/>
            <span className="avatar-input-error form__input-error form__input-error_avatar-link_position"></span>
    </PopupWithForm>
    <PopupWithForm
        name = "profile"
        title = "Редактировать профиль"
        textButtonSubmit = "Сохранить"
        isOpen = {isEditProfilePopupOpen}
        onClose = {closeAllPopups}>
            <input
                type="text"
                name="name"
                id="name-input"
                className="form__input form__input_name_position"
                placeholder="Никнейм"
                minLength={2}
                maxLength={40}
                required/>
            <span className="name-input-error form__input-error form__input-error_name_position"></span>
            <input
                type="text"
                name="about"
                id="about-input"
                className="form__input form__input_prof_position"
                placeholder="О себе"
                minLength={2}
                maxLength={200}
                required/>
            <span className="about-input-error form__input-error form__input-error_profession_position"></span>
    </PopupWithForm>
    <PopupWithForm
        name = "create-card"
        title = "Новое место"
        textButtonSubmit = "Создать"
        isOpen = {isAddPlacePopupOpen}
        onClose = {closeAllPopups}>
            <input
                type="text"
                name="name"
                id="place-input"
                className="form__input form__input_place_position"
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required/>
            <span className="place-input-error form__input-error form__input-error_place-input_position"></span>
            <input
                type="url"
                name="link"
                id="place-link-input"
                className="form__input form__input_place-link_position"
                placeholder="Ссылка на картинку"
                required/>
            <span className="place-link-input-error form__input-error form__input-error_place-link-input_position"></span>
    </PopupWithForm>
    <PopupWithForm
        name = "delete-card"
        title = "Вы уверены?"
        textButtonSubmit = "Да"
        isOpen = {isDeleteCardPopupOpen}
        onClose = {closeAllPopups}>
    </PopupWithForm>
    <ImagePopup
        name = "max-img"
        dataCard = {selectedCard}
        onClose = {closeAllPopups} />
    </>

    );
};

export default App; 