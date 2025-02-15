import "./styles/index.css";
import Background from "./assets/Background.ts";
import { items } from "./assets/techSkills.ts";
import Header from "./components/Header/Header.tsx";
import LogoWall from "./components/LogoWall/LogoWall.tsx";

function App() {
  Background();
  return (
    <>
      <Header />
      <LogoWall items={items} />
    </>
  );
}

export default App;
