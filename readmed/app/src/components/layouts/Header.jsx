import React from 'react';
import ReactLogo from '../../assets/react.svg';
import { motion } from 'framer-motion'
import { headerResource } from '../../styles/headerResource';
import '../../css/Header.css';

export const Header = () => {

  const { showOn } = headerResource()

  return (
    <header className="container-fluid">
      <motion.div className="d-flex p-5 g-4 align-items-center" initial="initial" animate="animate" variants={showOn}>
        <motion.div animate={{rotate: 30, transition: {duration: 2}}}>
          <img src={ReactLogo} alt="Logo"></img>
        </motion.div>
        <a href='/progressmed' className='p-3 pt-0 pb-0'>
          <h1 className="fs-3 text-danger m-0">Progressmed</h1>
        </a>
      </motion.div>
    </header>
  );
};
