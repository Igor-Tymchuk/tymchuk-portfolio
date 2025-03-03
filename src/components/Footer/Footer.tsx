import clsx from "clsx";
import Logo from "../Logo/Logo.tsx";
import s from "./Footer.module.css";
import SocialLinks from "../SocialLinks/SocialLinks.tsx";

const Footer: React.FC = () => {
  return (
    <footer className="section">
      <div className={clsx("container", s.container)}>
        <Logo />
        <SocialLinks />
        <p>All rights reserved &copy; 2025</p>
      </div>
    </footer>
  );
};
export default Footer;
