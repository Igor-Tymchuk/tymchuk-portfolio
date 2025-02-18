import Logo from "../Logo/Logo.tsx";
import s from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={s.container}>
      <Logo />
      <p>All rights reserved &copy; 2025</p>
    </div>
  );
};
export default Footer;
