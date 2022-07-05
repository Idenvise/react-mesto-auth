import React, { useEffect, useRef } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import Card from './Card.jsx';
import { api } from '../utils/Api.js';

function Main(props) {
  const user = React.useContext(CurrentUserContext);
  const [currentCards, setCards] = React.useState();

  useEffect(() => {
  api.getInitialCards()
  .then(cards => setCards(cards))
  .catch(err => console.log(err))
  }, [])
  
  function handleCardLike(card, isLiked) {
    isLiked ? api.unsetLike(card._id).then(newCard => setCards(currentCards => currentCards.map(c => c._id === card._id ? newCard : c))).catch(err => console.log(err))
            : api.setLike(card._id).then(newCard => setCards(currentCards => currentCards.map(c => c._id === card._id ? newCard : c))).catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    card.owner._id === user._id && api.deleteCard(card._id).then(() => setCards(currentCard => currentCard.filter(c => !(c._id === card._id))))
  }
  
  return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src={user && user.avatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{user && user.name}</h1>
            <button className="profile__button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subname">{user && user.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Галерея">
        {currentCards && currentCards.map(card => {return <Card card={card} key={card._id} onCardDelete={handleCardDelete} isLiked={card.likes.some(i => i._id === user._id)} onCardClick={props.onCardClick} onCardLike={handleCardLike} isOwn={card.owner._id === user._id} isLiked={card.likes.some(i => i._id === user._id)} />})}
      </section>
    </main>
  )
}
export default Main