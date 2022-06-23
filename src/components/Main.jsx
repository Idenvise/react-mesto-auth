import api from '../utils/Api'
function Main(props) {
  console.log(api)
    return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="profile__avatar" alt="Аватар" src='' />
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subname">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements" aria-label="Галерея">
      </section>
    </main>
    )
}
export default Main