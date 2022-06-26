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
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }
  return (
  <div className="page">
    <Header />
    <Main onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
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
    <ImagePopup />
    <PopupDelete />
  </div>
  );
}

export default App;
