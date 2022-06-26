import React from 'react';
import '../index.css';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import PopupDelete from './PopupDelete';

function App() {
  let [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true)
    }
  let [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true)
    }
  let [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true)
    }
  let [selectedCard, setSelectedCard] = React.useState();
    function handleCardClick(card) {
      setSelectedCard(card)
    }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false)
  }
  return (
  <div className="page">
    <Header />
    <Main onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
    <Footer />
    <PopupWithForm name='profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} > 
      <input className='popup__input popup__input_content_name' id='name-input' defaultValue="Жак-Ив Кусто" placeholder="Имя" type="text" name='popup' minLength="2" maxLength="40" required />
      <span className='popup__input-error name-input-error'></span>
      <input className='popup__input popup__input_content_subname' id='subname-input' defaultValue="Исследователь океана" placeholder="О себе" type="text" name='subname' minLength="2" maxLength="200" required />
      <span className='popup__input-error subname-input-error'></span>
    </PopupWithForm>
    <PopupWithForm name='add' title='Новое место' buttonText='Создать'isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}> 
      <input className="popup__input popup__input_content_place" id="place-input" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
      <span className="popup__input-error place-input-error"></span>
      <input className="popup__input popup__input_content_link" id="url-input" placeholder="Ссылка на картинку" type="url" name="link" required />
      <span className="popup__input-error url-input-error"></span>
    </PopupWithForm>
    <PopupWithForm name='avatar' title='Обновить аватар' buttonText='Обновить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <input className="popup__input popup__input_content_avatar" id="avatar-input" placeholder="Ссылка на картинку" type="url" name="avatarUrl" required />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
    <ImagePopup card={selectedCard} />
    <PopupDelete />
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
