import "./styles/index.css";
import Background from "./assets/Background.ts";
import { items } from "./assets/techSkills.ts";
import Header from "./components/Header/Header.tsx";
import TechSkills from "./components/TechSkills/TechSkills.tsx";
import Hero from "./components/Hero/Hero.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";

function App() {
  Background();
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <TechSkills items={items} />
    </>
  );
}

export default App;
