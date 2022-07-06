import React, {useEffect} from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup'
import PopupDelete from './PopupDelete';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';

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
  function handleUpdateUser({name, about}) {
    api.changeProfileData(name, about).then(res => setUser(res)).catch(err => console.log(err))
  }
  function handleUpdateAvatar(url) {
    api.changeAvatar(url).then(res => setUser(res)).catch(err => console.log(err))
  }

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Header />
      <Main onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <PopupWithForm name='add' title='Новое место' buttonText='Создать'isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}> 
        <input className="popup__input popup__input_content_place" id="place-input" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
        <span className="popup__input-error place-input-error"></span>
        <input className="popup__input popup__input_content_link" id="url-input" placeholder="Ссылка на картинку" type="url" name="link" required />
        <span className="popup__input-error url-input-error"></span>
      </PopupWithForm>
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isPopupImageOpen} />}
      <PopupDelete />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
