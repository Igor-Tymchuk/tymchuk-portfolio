import clsx from "clsx";
import s from "./Contacts.module.css";
import Location from "../Location/Location.tsx";
import { FaDownload } from "react-icons/fa";

const Contacts: React.FC = () => {
  return (
    <div className={clsx("section", s.contacts)} id="contacts">
      <div className={clsx("container", s.container)}>
        <h2>MY CONTACTS</h2>
        <div className={s.content}>
          <div className={s.info}>
            <ul>
              <li className={s.item}>
                <p>E-mail:</p>
                <span>tymchuk.developer@gmail.com</span>
              </li>
              <li className={s.item}>
                <p>Phone number:</p>
                <span>+38 (096) 131-22-45</span>
              </li>
              <li className={s.item}>
                <p>LinkedIn:</p>
                <span>https://www.linkedin.com/in/igor-tymchuk</span>
              </li>
              <li className={s.item}>
                <p>Telegram:</p>
                <span>@Tymchuk_Developer</span>
              </li>
              <li className={s.item}>
                <p>GitHub:</p>
                <span>https://github.com/Igor-Tymchuk</span>
              </li>
            </ul>
            <div className={s.resume}>
              <span>Get My Resume in PDF-File</span>
              <button className="button">
                <FaDownload className={s.icon} /> Download
              </button>
            </div>
          </div>
          <Location />
        </div>
      </div>
    </div>
  );
};
export default Contacts;
