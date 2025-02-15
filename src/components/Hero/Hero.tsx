import s from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={s.hero}>
      <a className={s.button}>
        <span></span>Contact Me
      </a>
    </div>
  );
};
export default Hero;
