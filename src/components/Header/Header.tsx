import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div>
          TYMCHUK<span>DEVELOPER</span>
        </div>
        <p>Make your WEB world better...</p>
      </div>
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
