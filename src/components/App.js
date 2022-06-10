import React from "react";

function App() {
    return (
        <>
    <div className="page__content">
      <header className="header">
        <img className="header__logo" src="<%=require('./image/header/logo.svg')%>" alt="логотип" />
      </header>

      <main>
        <section className="profile">
          <button type="button" className="profile__edit-avatar">
            <img className="profile__avatar" src="#" alt="Загружаю ..."/>
          </button>
          <div className="profile__info">
            <h1 className="profile__nick-name">Загружаю ...</h1>
            <button type="button" className="profile__edit">
            </button>
            <p className="profile__profession">Загружаю ...</p>
          </div>
          <button type="button" className="profile__add-photo"></button>
        </section>
        <section className="photo-grid" id="card-list"></section>
      </main>

      <footer className="footer">
        <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
      </footer>
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
    <div className="popup popup_type_max-img" id="max-img">
      <div className="popup__body">
        <div className="popup__content-max-img popup-content">
          <img className="popup__max-img" src="#" alt="#" />
          <h2 className="popup__max-img-title">Архыз</h2>
          <button
            type="button"
            className="popup__close-button"
          ></button>
        </div>
      </div>
    </div>
    <template id="template-сard">
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
    </template>
        </>
    )
}

export default App; 