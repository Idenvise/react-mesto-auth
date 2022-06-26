function ImagePopup(props) {
    return(
    <section className="popup popup-zoom" aria-label="Увеличение картинки">
      <div className="popup__container">
        <div className="popup__zoom-img-place">
          <img className="popup__zoom-img" src='#' alt="" />
          <p className="popup__zoom-place"></p>
        </div>
        <button className="popup__close" type="button"></button>
      </div>
    </section>
    )
}
export default ImagePopup