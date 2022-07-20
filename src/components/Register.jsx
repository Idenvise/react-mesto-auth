import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return(
        <form className="auth auth__register-form" name="register-form">
          <h2 className="auth__title">Регистрация</h2>
          <input className="auth__input" placeholder="Email" type="email" name="register" minLength="2" maxLength="30" autoComplete="on" required />
          <input className="auth__input" placeholder="Пароль" type="password" nampe="password" minLength="5" maxLength="30" autoComplete="on" required />
          <div className="auth__submit-container">
            <button className="auth__submit" type="submit">Зарегистрироваться</button>
            <span className="auth__to-login">Уже зарегистрированы? <Link className="auth__login-link" to="/sign-in">Войти</Link> </span>
          </div>
        </form>
    )
}