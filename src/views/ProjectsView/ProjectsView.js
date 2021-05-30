import Projects from '../../components/Projects';
import { ownProjects, commandProjects } from './myProjects';
import s from './ProjectsView.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

function ProjectsView() {
  useEffect(() => {
    Aos.init({ duration: 2000})
  },[])
  return (
    <>
      <h1 data-aos="fade-down" className={s.title}>Pet projects</h1>
      <h2 className={s.subTitle}>
        <span className={s.typeProject}>Command</span> projects
      </h2>
      <ul className={s.list}>
        {commandProjects.map(
          ({ id, label, link, preview, info, tech, repo }) => (
            <Projects
              key={id}
              label={label}
              link={link}
              preview={preview}
              info={info}
              tech={tech}
              repo={repo}
            />
          ),
        )}
      </ul>
      <h2 className={s.subTitle}>
        <span className={s.typeProject}>Own</span> projects
      </h2>
      <ul className={s.list}>
        {ownProjects.map(({ id, label, link, preview, info, tech, repo }) => (
          <Projects
            key={id}
            label={label}
            link={link}
            preview={preview}
            info={info}
            tech={tech}
            repo={repo}
          />
        ))}
      </ul>
    </>
  );
}

export default ProjectsView;
