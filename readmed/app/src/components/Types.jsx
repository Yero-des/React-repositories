import '../css/Types.css';
import { motion } from 'framer-motion'
import { variantResource } from '../styles/variantResource';

const Type = ({name, description, image }) => {

  const { showResource } = variantResource()

  return (
    <motion.a href={`/progressmed/${name}`} className='type-progress border border-gray border-1' title={description} whileHover="hover" variants={showResource}>
      <img src={image} alt={name} className='border-bottom border-light border-5'/>
      <p>{ name }</p>
    </motion.a>
  )
}

export const Types = ({ types }) => {

  return (
    <div className="container">
      <div className='m-4'>
        {types.map(type => {

          return (
            <Type key={type.id} { ... type } />
          )

        })}
      </div>      
    </div>
  )
}

