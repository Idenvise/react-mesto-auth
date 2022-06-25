function Card(props) {
  console.log(props)
    return(
        <article className="element" key={props.key}>
          <div className="element__trash"></div>
          <img className="element__img" src={props.card.link} alt="" />
          <div className="element__image-info">
            <h2 className="element__title">{props.card.name}</h2>
            <div className="element__card-info">
              <button className="element__like" type="button"></button>
              <h3 className="element__like-counter">{props.card.likes.length}</h3>
            </div>
          </div>
        </article>
    )
}
export default Card