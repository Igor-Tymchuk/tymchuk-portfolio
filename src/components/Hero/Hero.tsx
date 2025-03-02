import clsx from "clsx";
import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

interface HeroProps {
  switchCursor: () => void;
}

const Hero: React.FC<HeroProps> = ({ switchCursor }) => {
  const { t } = useTranslation();
  return (
    <div className={clsx("section", s.hero)}>
      <div className={clsx("container", s.container)}>
        <h1 className={s.title}>
          <p>TYMCHUK</p> FULLSTACK DEVELOPER
        </h1>
        <h2 className={s.description}>{t("hero_desc")}</h2>
        <div className={s.buttons}>
          <button className={clsx("button", s.button)}>
            {t("contact_me")}
          </button>
          <button
            className={clsx("button")}
            onClick={(e) => {
              switchCursor();
              e.currentTarget.blur();
            }}
          >
            Enable Magic Cursor
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
