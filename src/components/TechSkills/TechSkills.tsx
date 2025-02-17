import Marquee from "react-fast-marquee";
import s from "./TechSkills.module.css";
interface Item {
  img: string;
  title: string;
}
interface TechSkills {
  items: Item[];
}

const TechSkills: React.FC<TechSkills> = ({ items }) => {
  return (
    <div className={s.box}>
      <h2 className={s.title}>TECH SKILLS</h2>
      <Marquee speed={50} pauseOnHover className={s.marquee}>
        {items.map((item, index) => (
          <div key={index} className={s.subBox1}>
            <img src={item.img} alt={item.title} width="80" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover direction="right" className={s.marquee}>
        {items.map((item, index) => (
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
