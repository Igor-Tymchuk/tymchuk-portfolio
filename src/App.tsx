import "./styles/index.css";
import Background from "./assets/Background.ts";
import { additionalSkills, baseSkills } from "./assets/techSkills.ts";
import Header from "./components/Header/Header.tsx";
import TechSkills from "./components/TechSkills/TechSkills.tsx";
import Hero from "./components/Hero/Hero.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import MyProjects from "./components/MyProjects/MyProjects.tsx";
import { myProjects } from "./assets/myProjects.ts";

function App() {
  Background();
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <TechSkills base={baseSkills} additional={additionalSkills} />
      <MyProjects myProjects={myProjects} />
    </>
  );
}

export default App;
