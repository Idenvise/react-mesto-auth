import React from "react";

export default function Login() {
    return(
        <form className="auth auth__login-form" name="login-form">
          <h2 className="auth__title">Вход</h2>
          <input className="auth__input" placeholder="Email" type="email" name="login" minLength="2" maxLength="30" autoComplete="on" required />
          <input className="auth__input" placeholder="Пароль" type="password" nampe="password" minLength="5" maxLength="30" autoComplete="on" required />
          <div className="auth__submit-container">
            <button className="auth__submit" type="submit">Войти</button>
          </div>
        </form>
    )
}