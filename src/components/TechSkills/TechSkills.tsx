import Marquee from "react-fast-marquee";
import s from "./TechSkills.module.css";
import { Item } from "../../assets/techSkills.ts";
import clsx from "clsx";

interface TechSkills {
  base: Item[];
  additional: Item[];
}

const TechSkills: React.FC<TechSkills> = ({ base, additional }) => {
  return (
    <div className={clsx("section", s.section)}>
      <h2 className={s.title}>SOFT SKILLS</h2>
      <ul className={clsx("container", s.list)}>
        <li>- Learned to make decisions faster.</li>
        <li>- Complex solution of complex problems;</li>
        <li>- Creativity, originality and initiative;</li>
        <li>- Adaptation to new conditions;</li>
        <li>- Teamwork;</li>
        <li>- Stress resistance and moral strength;</li>
        <li>- Flexibility;</li>
        <li>- Endurance;</li>
      </ul>

      <h2 className={s.title}>TECH SKILLS</h2>
      <Marquee speed={50} pauseOnHover className={s.marquee}>
        {base.map((item, index) => (
          <div key={index} className={s.subBox1}>
            <img src={item.img} alt={item.title} width="80" className={s.img} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover direction="right" className={s.marquee}>
        {additional.map((item, index) => (
          <div key={index} className={clsx(s.subBox1, s.subBox2)}>
            <img src={item.img} alt={item.title} width="80" className={s.img} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default TechSkills;
