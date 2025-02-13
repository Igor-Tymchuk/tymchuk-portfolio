import "./App.css";
import Background from "./assets/Background.ts";
import LogoWall from "./components/LogoWall/LogoWall.tsx";
const items = [
  {
    img: "/icons/chatgpt.svg",
    title: "ChatGPT",
  },
  {
    img: "/icons/vite.svg",
    title: "Vite",
  },
  {
    img: "/icons/js.svg",
    title: "Java Script",
  },
  {
    img: "/icons/typescript.svg",
    title: "Type Script",
  },
  {
    img: "/icons/html.svg",
    title: "HTML5",
  },
  {
    img: "/icons/css.svg",
    title: "CSS3",
  },
  {
    img: "/icons/figma.svg",
    title: "Figma",
  },
  {
    img: "/icons/vsc.svg",
    title: "VSCode",
  },
  {
    img: "/icons/git.svg",
    title: "Git",
  },
  {
    img: "/icons/github.svg",
    title: "GitHub",
  },
  {
    img: "/icons/mongodb.svg",
    title: "MongoDB",
  },
  {
    img: "/icons/node-js.svg",
    title: "Node.JS",
  },
  {
    img: "/icons/npm.svg",
    title: "NPM",
  },
  {
    img: "/icons/postman.svg",
    title: "Postman",
  },
  {
    img: "/icons/react-router.svg",
    title: "React Router",
  },
  {
    img: "/icons/redux.svg",
    title: "Redux",
  },
  {
    img: "/icons/react.svg",
    title: "React.JS",
  },
  {
    img: "/icons/sass.svg",
    title: "Sass",
  },
  {
    img: "/icons/tailwind.svg",
    title: "Tailwind",
  },
  {
    img: "/icons/vercel.svg",
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
