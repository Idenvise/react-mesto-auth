import React from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext.js';
import Card from './Card.jsx';
import { CurrentCardsContext } from '../context/CurrentCardsContext.js'

function Main(props) {
  const currentCardsContext = React.useContext(CurrentCardsContext);
  const currentUserContext = React.useContext(CurrentUserContext);
  
  return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src={currentUserContext && currentUserContext.avatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{currentUserContext && currentUserContext.name}</h1>
            <button className="profile__button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subname">{currentUserContext && currentUserContext.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Галерея">
        {currentCardsContext && currentCardsContext.map(card => {return <Card card={card} key={card._id} onCardClick={props.onCardClick} isOwn={card.owner._id == currentUserContext._id} isLiked={card.likes.some(i => i._id === currentUserContext._id)} />})}
      </section>
    </main>
  )
}
export default Main