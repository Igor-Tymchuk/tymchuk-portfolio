import s from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div>
          Tymchuk<span>DEVELOPER</span>
        </div>
        <p>Make your WEB world better...</p>
      </div>
      <nav>
        <ul className={s.navList}>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
