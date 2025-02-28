import LanguageSwitcher from "../LanguageSwitcher.tsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Header.module.css";
import clsx from "clsx";

const Header: React.FC = () => {
  return (
    <header className="section">
      <div className={clsx("container", s.headerContainer)}>
        <Logo />
        <div className={s.navBox}>
          <LanguageSwitcher />
          <nav className={s.navList}>
            <a className="button" href="#">
              About Me
            </a>
            <a className="button" href="#">
              My Projects
            </a>
            <a className="button" href="#">
              Contacts
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
