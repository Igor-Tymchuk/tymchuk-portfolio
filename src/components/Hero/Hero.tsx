import clsx from "clsx";
import s from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={clsx("section", s.hero)}>
      <div className={clsx("container", s.container)}>
        <h1 className={s.title}>
          <p>TYMCHUK</p> FULLSTACK DEVELOPER
        </h1>
        <h2 className={s.description}>
          Turning Your Ideas into Functional and Beautiful Apps!
        </h2>
        <button className={clsx("button", s.button)}>Contact Me</button>
      </div>
    </div>
  );
};
export default Hero;
