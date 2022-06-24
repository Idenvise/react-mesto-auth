import React from 'react';
import {api} from '../utils/Api.js'

function Main(props) {
  let [userName, setUserName] = React.useState();
  let [userDescription , setUserDescription] = React.useState();
  let [userAvatar, setUserAvatar] = React.useState();
  api.getProfileInfo().then(res => { 
    setUserName(res.name)
    setUserDescription(res.about)
    setUserAvatar(res.avatar)
  });
  let [cards, setCards] = React.useState([]);
  api.getInitialCards().then(res => console.log(res))

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
      </section>
    </main>
  )
}
export default Main