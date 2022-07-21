import React from "react";

export default function InfoTooltip() {
    return(
        <section className="popup popup__info-tooltip popup_visible">
            <div className="popup__container">
                <div className="popup__info-tooltip__content">
                    <img className="popup__info-tooltip_image" src="../imgaes/popup__info-tooltip_succes" />
                    <h2 className="popup__info-tooltip_result">Вы успешно зарегистрировались!</h2>
                </div>
            </div>
        </section>
    )
}