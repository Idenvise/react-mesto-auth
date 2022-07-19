import { Route, Switch, Link } from 'react-router-dom';
import headerLogo from '../images/header__logo.svg'
function Header() {
    return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Место" />
      <Switch>
        <Route to='/sign-up'>
          <Link className="header__auth-link" to='/sign-in'>Войти</Link>
        </Route>
        <Route to='/sign-in'>
          <Link className="header__auth-link" to='/sign-up'>Регистрация</Link>
        </Route>
      </Switch>
    </header>
    )
}
export default Header