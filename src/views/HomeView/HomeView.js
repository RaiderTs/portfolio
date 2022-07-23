import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { techSkills } from './techSkills';
import TechSkills from '../../components/TechSkills';
import Contacts from '../../components/Contacts';
import man from '../../img/—Pngtree—a man holding a notebook_4438997.png';
import PropTypes from 'prop-types';
import s from './HomeView.module.css';

function HomeView() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.flex}>
          <p className={s.title}>Hi there!</p>
          <h1 className={s.info}>
            / My name's Alexandr and I’m a Front-end Developer!
          </h1>
        </div>
        <div className={s.flex}>
          <img src={man} alt="icon" width="660" height="565" />
        </div>
      </div>
      <h2 className={s.title}>Tech Skills</h2>
      <ul data-aos="zoom-in" className={s.list}>
        {techSkills.map(({ id, label, icon }) => (
          <TechSkills key={id} label={label} icon={icon} />
        ))}
      </ul>
      <h2 className={s.title}>Contacts</h2>
      <Contacts />
    </>
  );
}

HomeView.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.object),
};

export default HomeView;
