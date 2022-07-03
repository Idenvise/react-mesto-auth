function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
    return(
        <article className="element">
          <div className={`element__trash ${!props.isOwn && 'element__trash_invisible'}`}></div>
          <img className="element__img" src={props.card.link} alt={`Изображение места под названием ${props.card.name}`} onClick={handleClick}/>
          <div className="element__image-info">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__card-info">
              <button className={`element__like ${props.isLiked && 'element__like_active'}`} type="button"></button>
              <h3 className="element__like-counter">{props.card.likes.length}</h3>
            </div>
          </div>
        </article>
    )
}
export default Card