function Main() {
    function profileButtonClick() {
        document.querySelector('.popup-profile').classList.add('popup_visible')
    }
    return(
    <main className="content">
      <section className="profile" aria-label="Профиль">
        <div className="profile__avatar-wrapper">
          <img className="profile__avatar" alt="Аватар" src="#" />
        </div>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button className="profile__button" type="button" onClick={profileButtonClick}></button>
          </div>
          <p className="profile__subname">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="elements" aria-label="Галерея">
      </section>
    </main>
    )
}
export default Main