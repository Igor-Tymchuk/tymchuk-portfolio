import "./App.css";
import Background from "./assets/Background.ts";
import LogoWall from "./components/LogoWall/LogoWall.tsx";
const items = [
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/chatgpt.svg",
    title: "ChatGPT",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/vite.svg",
    title: "Vite",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/js.svg",
    title: "Java Script",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/typescript.svg",
    title: "Type Script",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/html.svg",
    title: "HTML5",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/css.svg",
    title: "CSS3",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/figma.svg",
    title: "Figma",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/vsc.svg",
    title: "VSCode",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/git.svg",
    title: "Git",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/github.svg",
    title: "GitHub",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/mongodb.svg",
    title: "MongoDB",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/node-js.svg",
    title: "Node.JS",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/npm.svg",
    title: "NPM",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/postman.svg",
    title: "Postman",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/react-router.svg",
    title: "React Router",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/redux.svg",
    title: "Redux",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/react.svg",
    title: "React.JS",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/sass.svg",
    title: "Sass",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/tailwind.svg",
    title: "Tailwind",
  },
  {
    img: "https://github.com/Igor-Tymchuk/tymchuk-portfolio/blob/main/src/assets/icons/vercel.svg",
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
