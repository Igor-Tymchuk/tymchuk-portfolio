import clsx from "clsx";
import s from "./Contacts.module.css";
import Location from "../Location/Location.tsx";

const Contacts: React.FC = () => {
  return (
    <div className="section" id="contacts">
      <div className={clsx("container", s.container)}>
        <h2>MY CONTACTS</h2>
        <div className={s.content}>
          <div className={s.info}>
            <ul>
              <li>
                E-mail:
                <span>tymchuk.developer@gmail.com</span>
              </li>
              <li>
                Phone:
                <span>+38 (096) 131-22-45</span>
              </li>
              <li>
                LinkedIn:
                <span>https://www.linkedin.com/in/igor-tymchuk/</span>
              </li>
              <li>
                Telegram:
                <span>@Tymchuk_Developer</span>
              </li>
              <li>
                GitHub:
                <span>https://github.com/Igor-Tymchuk</span>
              </li>
            </ul>
            <div className={s.resume}>
              <span>Get My Resume in PDF-File</span>
              <button className="button">Download</button>
            </div>
          </div>
          <Location />
        </div>
      </div>
    </div>
  );
};
export default Contacts;
