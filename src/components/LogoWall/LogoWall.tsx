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
    <div style={{ overflow: "hidden" }}>
      <Marquee speed={50} pauseOnHover style={{ maxWidth: "100%" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "5px",
              width: "120px",
              height: "130px",
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
      <Marquee
        speed={40}
        pauseOnHover
        direction="right"
        style={{ maxWidth: "100%" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              borderRadius: "5px",
              width: "120px",
              height: "130px",
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
    </div>
  );
};
export default LogoWall;
