import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher.tsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Header.module.css";
import clsx from "clsx";

const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="section">
      <div className={clsx("container", s.headerContainer)}>
        <Logo />
        <div className={s.navBox}>
          <LanguageSwitcher />
          <nav className={s.navList}>
            <a className="button" href="#">
              {t("about_me")}
            </a>
            <a className="button" href="#">
              {t("my_projects")}
            </a>
            <a className="button" href="#">
              {t("contacts")}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
