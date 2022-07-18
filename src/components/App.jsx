import React, {useEffect} from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx'
import ImagePopup from './ImagePopup'
import PopupDelete from './PopupDelete';
import {api} from '../utils/Api.js';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
import AddPlacePopup from './AddPlacePopup.jsx';


function App() {
  const [currentUser, setUser] = React.useState({});
  const [currentCards, setCards] = React.useState([]);
  const [loggedIn, setLoginState] = React.useState(true);

  useEffect(() => {
  api.getInitialCards()
  .then(cards => setCards(cards))
  .catch(err => console.log(err))
  }, [])
  
  function handleCardLike(card, isLiked) {
    const promise = isLiked ? api.unsetLike(card._id) : api.setLike(card._id)
    promise.then(newCard => setCards(currentCards => currentCards.map(c => c._id === card._id ? newCard : c))).catch(err => console.log(err))
  }


  function handleCardDelete(card) {
    card.owner._id === currentUser._id && api.deleteCard(card._id).then(() => setCards(currentCard => currentCard.filter(c => !(c._id === card._id))))
  }
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
    api.changeProfileData(name, about).then(res => setUser(res)).then(()=>closeAllPopups()).catch(err => console.log(err))
  }
  function handleUpdateAvatar(url) {
    api.changeAvatar(url).then(res => setUser(res)).then(()=>closeAllPopups()).catch(err => console.log(err))
  }
  function handleAddPlace(obj) {
    api.createCard(obj).then(card => setCards([card, ...currentCards])).then(()=>closeAllPopups()).catch(err => console.log(err))
}

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
      <Switch>
        <Route exact path='/'>
          <Header />
          <Main cards={currentCards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onEditProfile = {handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
        </Route>
        <Route path='/sign-in'>

        </Route>
        <Route path='/sign-up'>

        </Route>
        
        
      </Switch>

      <EditProfilePopup onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPlacePopup onAddPlace={handleAddPlace} name='add' title='Новое место' buttonText='Создать'isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} /> 
      <EditAvatarPopup onUpdateAvatar={handleUpdateAvatar} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} isOpen={isPopupImageOpen} />
      <PopupDelete />
    </div>
  </CurrentUserContext.Provider>
  );
}

export default App;
