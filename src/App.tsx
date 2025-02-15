import "./styles/index.css";
import Background from "./assets/Background.ts";
import { items } from "./assets/techSkills.ts";
import Header from "./components/Header/Header.tsx";
import LogoWall from "./components/LogoWall/LogoWall.tsx";
import Hero from "./components/Hero/Hero.tsx";

function App() {
  Background();
  return (
    <>
      <Header />
      <Hero />
      <LogoWall items={items} />
    </>
  );
}

export default App;
