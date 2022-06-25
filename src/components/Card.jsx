function Card(props) {
  console.log(props.card)
    return(
        <article className="element">
          <div className="element__trash"></div>
          <img className="element__img" src="#" alt="" />
          <div className="element__image-info">
            <h2 className="element__title"></h2>
            <div className="element__card-info">
              <button className="element__like" type="button"></button>
              <h3 className="element__like-counter">{}</h3>
            </div>
          </div>
        </article>
    )
}
export default Card