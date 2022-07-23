import Navigation from '../Navigation';
import s from './AppBar.module.css';
import logo from '../../img/favicon.ico'

export default function Appbar() {
  return (
    <header className={s.header}>
      <a className={s.header-logo}href="/" aria-label="Logo">
        <img src={logo} alt="logo" width="45" height="45"/>
      </a>
      <Navigation />
    </header>
  );
}
