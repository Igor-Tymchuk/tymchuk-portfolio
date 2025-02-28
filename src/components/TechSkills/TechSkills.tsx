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
      <h2 className={s.title}>TECH SKILLS</h2>
      <Marquee speed={50} pauseOnHover className={s.marquee}>
        {base.map((item, index) => (
          <div key={index} className={s.subBox1}>
            <img src={item.img} alt={item.title} width="80" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover direction="right" className={s.marquee}>
        {additional.map((item, index) => (
          <div key={index} className={s.subBox2}>
            <img src={item.img} alt={item.title} width="80" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default TechSkills;
