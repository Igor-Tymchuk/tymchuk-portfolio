import clsx from "clsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className="section">
      <div className={clsx("container", s.container)}>
        <Logo />
        <img src="https://ghchart.rshah.org/Igor-Tymchuk" alt="GitHub chart" />
        <p>All rights reserved &copy; 2025</p>
      </div>
    </footer>
  );
};
export default Footer;
