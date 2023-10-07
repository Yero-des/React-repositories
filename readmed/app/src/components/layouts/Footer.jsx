import '../../css/Footer.css';
import { motion } from 'framer-motion'
import { variantResource } from '../../styles/variantResource';

export const Footer = () => {

  const { showResource } = variantResource()

  return (
    <footer>
      <motion.a href='https://www.facebook.com/profile.php?id=100069514067971' target='_blank' whileHover="hover" variants={showResource}>
        <img src='/tcode.svg' alt='principal logo'/>
      </motion.a>
    </footer>
  )
}