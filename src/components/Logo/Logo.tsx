import s from "./Logo.module.css";

const Logo: React.FC = () => {
  return (
    <div className={s.logo}>
      <div>
        TYMCHUK<span>DEVELOPER</span>
      </div>
      <p>Make your WEB world better...</p>
    </div>
  );
};
export default Logo;
