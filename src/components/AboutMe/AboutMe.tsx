import s from "./AboutMe.module.css";
import photo from "../../images/photo.webp";
import clsx from "clsx";

const AboutMe: React.FC = () => {
  return (
    <div className="section" id="about-me">
      <div className={clsx("container", s.container)}>
        <h2 className={s.title}>ABOUT ME</h2>
        <div className={s.content}>
          <div className={s.textBlock}>
            <p>
              My name is Igor! I am junior fullstack developer. Now skills are
              HTML, CSS, JavaScript, React, Redux, SASS, TypeScript, Node.js. I
              have experience with some JS libraries.
            </p>
            <p>
              About myself: Calm, attentive, optimistic, I have a sense of
              humor.
            </p>
          </div>
          <img
            src={photo}
            className={s.img}
            alt="Igor Tymchuk Developer Photo"
            width={380}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
