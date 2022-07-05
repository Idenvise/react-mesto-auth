import React, {useEffect} from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import PopupDelete from './PopupDelete';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';


function App() {
  const [currentUser, setUser] = React.useState();
  
  useEffect(() => {
    api.getProfileInfo()
    .then(info => {
      setUser(info);
    })  
      .catch(err => console.log(err))
    }, [])

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true)
    }
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    function handleAddPlaceClick() {
      setIsAddPlacePopupOpen(true)
    }
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true)
    }
  const [isPopupImageOpen, setIsPopupImageOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
    function handleCardClick(card) {
      setSelectedCard(card)
      setIsPopupImageOpen(true)
    }
 
  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsPopupImageOpen(false);
    setSelectedCard({});
  }
return (
  <CurrentUserContext.Provider value={currentUser}>
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
      {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isPopupImageOpen} />}
      <PopupDelete />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
