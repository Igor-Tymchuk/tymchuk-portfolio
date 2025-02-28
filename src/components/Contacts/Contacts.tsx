import clsx from "clsx";
import s from "./Contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div className="section">
      <div className={clsx("container", s.container)}>
        <h2>MY CONTACTS</h2>
      </div>
    </div>
  );
};
export default Contacts;
