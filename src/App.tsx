import "./styles/index.css";
import Background from "./assets/Background.ts";
import { additionalSkills, baseSkills } from "./assets/techSkills.ts";
import Header from "./components/Header/Header.tsx";
import TechSkills from "./components/TechSkills/TechSkills.tsx";
import Hero from "./components/Hero/Hero.tsx";
import AboutMe from "./components/AboutMe/AboutMe.tsx";
import MyProjects from "./components/MyProjects/MyProjects.tsx";
import { myProjects } from "./assets/myProjects.ts";
import Contacts from "./components/Contacts/Contacts.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  Background();
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <TechSkills base={baseSkills} additional={additionalSkills} />
      <MyProjects myProjects={myProjects} />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
