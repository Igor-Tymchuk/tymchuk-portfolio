import Marquee from "react-fast-marquee";
import s from "./LogoWall.module.css";
interface Item {
  img: string;
  title: string;
}
interface LogoWallProps {
  items: Item[];
}

const LogoWall: React.FC<LogoWallProps> = ({ items }) => {
  return (
    <div className={s.box}>
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
export default LogoWall;
