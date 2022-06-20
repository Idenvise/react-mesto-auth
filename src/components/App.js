import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
function App() {
  return (
  <div className="page">
    <Header />
    <Main />
    <Footer />
    <section className="popup popup-profile">
      <div className="popup__container">
        <form className="popup__form" name="popup" noValidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input className="popup__input popup__input_content_name" id="name-input" value="Жак-Ив Кусто" placeholder="Имя" type="text" name="name" minLength="2" maxLength="40" required />
          <span className="popup__input-error name-input-error"></span>
          <input className="popup__input popup__input_content_subname" id="subname-input" value="Исследователь океана" placeholder="О себе" type="text" name="subname" minLength="2" maxLength="200" required />
          <span className="popup__input-error subname-input-error"></span>
          <button className="popup__save" type="submit">Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup-add">
      <div className="popup__container">
        <form className="popup__form" name="popup_add" noValidate>
          <h2 className="popup__title">Новое место</h2>
          <input className="popup__input popup__input_content_place" id="place-input" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
          <span className="popup__input-error place-input-error"></span>
          <input className="popup__input popup__input_content_link" id="url-input" placeholder="Ссылка на картинку" type="url" name="link" required />
          <span className="popup__input-error url-input-error"></span>
          <button className="popup__save" type="submit">Создать</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup-zoom" aria-label="Увеличение картинки">
      <div className="popup__container">
        <div className="popup__zoom-img-place">
          <img className="popup__zoom-img" src="#" alt="" />
          <p className="popup__zoom-place"></p>
        </div>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup-delete">
      <div className="popup__container">
        <div className="popup__accept-request">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__delete">Да</button>
        </div>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <section className="popup popup-avatar">
      <div className="popup__container">
        <form className="popup__form" name="popup_avatar" noValidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input className="popup__input popup__input_content_avatar" id="avatar-input" placeholder="Ссылка на картинку" type="url" name="avatarUrl" required />
          <span className="popup__input-error avatar-input-error"></span>
          <button className="popup__save" type="submit" disabled>Сохранить</button>
        </form>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    <template id="template__element">
      <article className="element">
        <div className="element__trash"></div>
        <img className="element__img" src="#" alt="" />
        <div className="element__image-info">
          <h2 className="element__title"></h2>
          <div className="element__card-info">
            <button className="element__like" type="button"></button>
            <h3 className="element__like-counter">0</h3>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
