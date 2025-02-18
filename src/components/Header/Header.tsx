import Logo from "../Logo/Logo.tsx";
import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <nav className={s.navList}>
        <a className={s.link} href="#">
          About Me
        </a>
        <a className={s.link} href="#">
          My Projects
        </a>
        <a className={s.link} href="#">
          Contacts
        </a>
      </nav>
    </header>
  );
};
export default Header;
