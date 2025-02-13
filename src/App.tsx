import "./App.css";
import Background from "./assets/Background.ts";
import LogoWall from "./components/LogoWall/LogoWall.tsx";
const items = [
  {
    img: "../src/assets/icons/chatgpt.svg",
    title: "ChatGPT",
  },
  {
    img: "../src/assets/icons/vite.svg",
    title: "Vite",
  },
  {
    img: "../src/assets/icons/js.svg",
    title: "Java Script",
  },
  {
    img: "../src/assets/icons/typescript.svg",
    title: "Type Script",
  },
  {
    img: "../src/assets/icons/html.svg",
    title: "HTML5",
  },
  {
    img: "../src/assets/icons/css.svg",
    title: "CSS3",
  },
  {
    img: "../src/assets/icons/figma.svg",
    title: "Figma",
  },
  {
    img: "../src/assets/icons/vsc.svg",
    title: "VSCode",
  },
  {
    img: "../src/assets/icons/git.svg",
    title: "Git",
  },
  {
    img: "../src/assets/icons/github.svg",
    title: "GitHub",
  },
  {
    img: "../src/assets/icons/mongodb.svg",
    title: "MongoDB",
  },
  {
    img: "../src/assets/icons/node-js.svg",
    title: "Node.JS",
  },
  {
    img: "../src/assets/icons/npm.svg",
    title: "NPM",
  },
  {
    img: "../src/assets/icons/postman.svg",
    title: "Postman",
  },
  {
    img: "../src/assets/icons/react-router.svg",
    title: "React Router",
  },
  {
    img: "../src/assets/icons/redux.svg",
    title: "Redux",
  },
  {
    img: "../src/assets/icons/react.svg",
    title: "React.JS",
  },
  {
    img: "../src/assets/icons/sass.svg",
    title: "Sass",
  },
  {
    img: "../src/assets/icons/tailwind.svg",
    title: "Tailwind",
  },
  {
    img: "../src/assets/icons/vercel.svg",
    title: "Vercel",
  },
];

function App() {
  Background();
  return (
    <div>
      <LogoWall items={items} />
    </div>
  );
}

export default App;
