import Marquee from "react-fast-marquee";
interface Item {
  img: string;
  title: string;
}
interface LogoWallProps {
  items: Item[];
}

const LogoWall: React.FC<LogoWallProps> = ({ items }) => {
  return (
    <>
      <Marquee speed={50} pauseOnHover>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "5px",
              width: "120px",
              padding: "15px 20px 2px 20px",
              margin: "10px",
              textAlign: "center",
              backgroundColor: "#223333dd",
            }}
          >
            <img src={item.img} alt={item.title} width="80" />
            <h3 style={{ color: "wheat", fontFamily: "monospace" }}>
              {item.title}
            </h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} pauseOnHover direction="right">
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "5px",
              width: "120px",
              padding: "15px 20px 2px 20px",
              margin: "10px",
              textAlign: "center",
              backgroundColor: "#222233dd",
            }}
          >
            <img src={item.img} alt={item.title} width="80" />
            <h3 style={{ color: "wheat", fontFamily: "monospace" }}>
              {item.title}
            </h3>
          </div>
        ))}
      </Marquee>
    </>
  );
};
export default LogoWall;
