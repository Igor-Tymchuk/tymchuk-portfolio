import s from "./AboutMe.module.css";
import photo from "../../images/photo.webp";

const AboutMe: React.FC = () => {
  return (
    <div className={s.container}>
      <div className={s.textBlock}>
        <h2>ABOUT ME</h2>
        <p>
          My name is Igor! I am junior fullstack developer. Now skills are HTML,
          CSS, JavaScript, React, Redux, SASS, TypeScript, Node.js. I have
          experience with some JS libraries.
        </p>
        <p>
          About myself: Calm, attentive, optimistic, I have a sense of humor.
        </p>
        <h3>Soft Skills</h3>
        <ul>
          <li>- Teamwork;</li>
          <li>- Stress resistance and moral strength;</li>
          <li>- Flexibility;</li>
          <li>- Endurance;</li>
          <li>- Learned to make decisions faster.</li>
          <li>- Complex solution of complex problems;</li>
          <li>- Creativity, originality and initiative;</li>
          <li>- Adaptation to new conditions;</li>
        </ul>
      </div>
      <img
        src={photo}
        className={s.img}
        alt="Igor Tymchuk Developer Photo"
        width={380}
      />
    </div>
  );
};
export default AboutMe;
