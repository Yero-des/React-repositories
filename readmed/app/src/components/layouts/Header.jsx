import React from 'react';
import ReactLogo from '../../assets/react.svg';
import { motion } from 'framer-motion'
import { headerResource } from '../../styles/headerResource';
import '../../css/Header.css';

export const Header = () => {

  const { showOn } = headerResource()

  return (
    <header className="container-fluid">
      <motion.div className="d-flex flex-column p-5 justify-content-center align-items-center" initial="initial" animate="animate" variants={showOn}>
        <motion.div animate={{rotate: 30, transition: {duration: 2}}}>
          <img src={ReactLogo} alt="Logo"></img>
        </motion.div>
        <a href='/progressmed' className='mt-3'>
          <h1 className="text-danger m-0">Progressmed</h1>
        </a>
      </motion.div>
      <motion.div className="row justify-content-center align-items-center" initial="initial" animate="animate" variants={showOn}>
        <div className="col-auto">
          <h4 className="text-secondary fs-6">Welcome to my new proyect, my name is yeromi ;)</h4>
        </div>        
      </motion.div>
    </header>
  );
};
