import s from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={s.hero}>
      <h1 className={s.title}>
        <p>TYMCHUK</p> FULLSTACK DEVELOPER
      </h1>
      <h2 className={s.description}>
        Turning Your Ideas into Functional and Beautiful Apps!
      </h2>
      <button className={s.button}>Contact Me</button>
    </div>
  );
};
export default Hero;
