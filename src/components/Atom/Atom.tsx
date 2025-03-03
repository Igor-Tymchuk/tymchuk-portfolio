import clsx from 'clsx'
import s from './Atom.module.css'
const Atom: React.FC = () => {
  return (
    <div className={s.atom}>
      <div className={s.center}></div>
      <div className={clsx(s.orbit, s.orbit1)}>
        <div className={clsx(s.electron, s.elector1)}></div>
      </div>
      <div className={clsx(s.orbit, s.orbit2)}>
        <div className={clsx(s.electron, s.electron2)}></div>
      </div>
      <div className={clsx(s.orbit, s.orbit3)}>
        <div className={clsx(s.electron, s.electron3)}></div>
      </div>
    </div>
  );
};
export default Atom;
