import clsx from "clsx";
import s from "./Hero.module.css";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={clsx("section", s.hero)}>
      <div className={clsx("container", s.container)}>
        <h1 className={s.title}>
          <p>TYMCHUK</p> FULLSTACK DEVELOPER
        </h1>
        <h2 className={s.description}>{t("hero_desc")}</h2>
        <button className={clsx("button", s.button)}>{t("contact_me")}</button>
      </div>
    </div>
  );
};
export default Hero;
