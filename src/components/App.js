import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
    return (
        <>
    <div className="page__content">
        <Header />
        <Main />
        <Footer />
    </div>
    <div className="popup" id="avatar">
      <div className="popup__body">
        <form
          action="#"
          name="cheng-avatar"
          id="cheng-avatar"
          className="form popup-content"
          novalidate
        >
          <div className="form__content">
            <h2 className="form__title">Обновить аватар</h2>
            <input
              type="url"
              name="avatar"
              id="avatar-input"
              className="form__input form__input_avatar-link_position"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="avatar-input-error form__input-error form__input-error_avatar-link_position"></span>
            <button type="submit" className="form__save-button submit-button">Сохранить</button>
            <button
              type="button"
              className="popup__close-button"
            ></button>
          </div>
        </form>
      </div>
    </div>
    <div className="popup" id="profile">
      <div className="popup__body">
        <form
          action="#"
          name="profile-edit"
          id="profile-edit"
          className="form popup-content"
          novalidate
        >
          <div className="form__content">
            <h2 className="form__title">Редактировать профиль</h2>
            <input
              type="text"
              name="name"
              id="name-input"
              className="form__input form__input_name_position"
              minlength="2"
              maxlength="40"
              required
            />
            <span className="name-input-error form__input-error form__input-error_name_position"></span>
            <input
              type="text"
              name="about"
              id="about-input"
              className="form__input form__input_prof_position"
              minlength="2"
              maxlength="200"
              required
            />
            <span className="about-input-error form__input-error form__input-error_profession_position"></span>
            <button type="submit" className="form__save-button submit-button">Сохранить</button>
            <button
              type="button"
              className="popup__close-button"
            ></button>
          </div>
        </form>
      </div>
    </div>
    <div className="popup" id="create-card">
      <div className="popup__body">
        <form
          action="#"
          name="form-create"
          id="form-create"
          className="form popup-content"
          novalidate
        >
          <div className="form__content">
            <h2 className="form__title">Новое место</h2>
            <input
              type="text"
              name="name"
              id="place-input"
              className="form__input form__input_place_position"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required
            />
            <span className="place-input-error form__input-error form__input-error_place-input_position"></span>
            <input
              type="url"
              name="link"
              id="place-link-input"
              className="form__input form__input_place-link_position"
              placeholder="Ссылка на картинку"
              required
            />
            <span className="place-link-input-error form__input-error form__input-error_place-link-input_position"></span>
            <button type="submit" className="form__save-button submit-button">Создать</button>
            <button
              type="button"
              className="popup__close-button"
            ></button>
          </div>
        </form>
      </div>
    </div>
    <div className="popup" id="delete-card">
      <div className="popup__body">
        <form
          action="#"
          name="you-sure"
          id="you-sure"
          className="form popup-content"
          novalidate
        >
          <div className="form__content">
            <h2 className="form__title">Вы уверены?</h2>
            <button type="submit" className="form__you-sure-button submit-button">Да</button>
            <button
              type="button"
              className="popup__close-button"
            ></button>
          </div>
        </form>
      </div>
    </div>

        </>
    );
};

export default App; 