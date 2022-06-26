import React, { useEffect } from 'react';
import {api} from '../utils/Api.js';
import Card from './Card.jsx';

function Main(props) {
  let [userName, setUserName] = React.useState();
  let [userDescription , setUserDescription] = React.useState();
  let [userAvatar, setUserAvatar] = React.useState();
  let [cardsArr, setCardsArr] = React.useState([]);

  
  useEffect(() => {
    Promise.all([api.getProfileInfo(), api.getInitialCards()])
    .then(([info, cards]) => {
      setUserName(info.name)
      setUserDescription(info.about)
      setUserAvatar(info.avatar)
      setCardsArr(cards)
})
}, [])
  
  return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src={userAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subname">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Галерея">
        {cardsArr.map(card => {return <Card card={card} key={card._id} onCardClick={props.onCardClick} />})}
      </section>
    </main>
  )
}
export default Main