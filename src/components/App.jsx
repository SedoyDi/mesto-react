import React from 'react';
import './App.css';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="profile">
          <button type="button" className="profile__edit-avatar">
            <img className="profile__avatar" src="#" alt="Загружаю ..." />
          </button>
          <div className="profile__info">
            <h1 className="profile__nick-name">Загружаю ...</h1>
            <button type="button" className="profile__edit">
            </button>
            <p className="profile__profession">Загружаю ...</p>
          </div>
          <button type="button" className="profile__add-photo" />
        </section>
        <section className="photo-grid" id="card-list" />
      </main>
      <footer className="footer">
        <p className="footer__copyright">© 2020 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
