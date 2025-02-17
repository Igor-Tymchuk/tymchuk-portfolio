import { MyProject } from "../../assets/myProjects.ts";
import s from "./MyProjects.module.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MyProjectsProps {
  myProjects: MyProject[];
}

const MyProjects: React.FC<MyProjectsProps> = ({ myProjects }) => {
  const [visibleProjects, setVisibleProjects] = useState<number>(2);
  const lastItemRef = useRef<HTMLLIElement | null>(null);

  const addItem = () => {
    if (visibleProjects < myProjects.length) {
      setVisibleProjects((prev) => prev + 1);
    }
  };
  useEffect(() => {
    if (visibleProjects === 2) return;
    if (lastItemRef.current) {
      const rect = lastItemRef.current.getBoundingClientRect();
      const offset = window.innerHeight / 2 - rect.height / 2;
      window.scrollTo({
        top: window.scrollY + rect.top - offset,
        behavior: "smooth",
      });
    }
  }, [visibleProjects]);
  return (
    <div className={s.container}>
      <ul className={s.list}>
        {myProjects.slice(0, visibleProjects).map((project, index) => (
          <motion.li
            ref={index === visibleProjects - 1 ? lastItemRef : null}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            key={index + 1}
            className={s.project}
          >
            <div className={s.textBlock}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.urlGit} className={s.link}>
                View code on GitHub
              </a>
            </div>
            <div className={s.imgBlock}>
              <img src={project.img} alt={project.title} />
              <a href={project.urlLive} className={s.link}>
                Go live
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
      {visibleProjects !== myProjects.length && (
        <button onClick={addItem} className={s.button}>
          Show more...
        </button>
      )}
    </div>
  );
};
export default MyProjects;
