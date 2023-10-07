import { useParams } from "react-router-dom"
import { useDetails } from "../hocks/useDetails"
import { variantResource } from "../styles/variantResource"
import { motion } from "framer-motion"
import { useEffect } from "react"
import { useProgress } from "../hocks/useProgress"

const Resource = ({name, description, image, progress, progress_max, onClickAddProgress, onClickLessProgress }) => {

  const { showResource } = variantResource()
  var progressPercentaje = (progress * 100) / progress_max

  return (
    <motion.a className='type-progress type-resource border border-gray border-1' title={description} whileHover="hover" variants={showResource}>
      <div className='border-bottom border-light border-5 bg-secondary'>
        <div style={{ width: `${progressPercentaje}%` }}></div>
        <img src={image} alt={name}/>
      </div> 
      <div className="d-flex flex-column g-2">
        <p>{ name }</p>
        <p>{ progress } / { progress_max }</p>
      </div>
      <div className="add-progress" onClick={onClickLessProgress}></div>
      <div className="less-progress" onClick={onClickAddProgress}></div>
    </motion.a>
  )
}

export const TypeDetails = ({ resources, types}) => {

  const { name } = useParams()
  const { showByType, changeType, details, setDetails } = useDetails()
  const { addProgress, lessProgress } = useProgress()

  useEffect(() => {
    setDetails({
      type: name,
    });
  }, []);

  const resourcesFilter = showByType(resources);

  return (
    <div className="container">   

      {/* Filter fast */}
      <motion.div className='type-filter d-flex justify-content-end m-4'>
        <select className="form-control" onChange={changeType} value={details.type}>
          {types.map(type => 
            <option key={type.id} value={type.name}>{type.name}</option>
          )}
        </select>
      </motion.div>

      {/* Resources filtered */}
      <div className="m-4">
        {resourcesFilter.map(resource => {

          return (
            <Resource key={resource.id} { ... resource } 
            onClickAddProgress={() => {
              addProgress(resource)
            }}
            onClickLessProgress={() => {
              lessProgress(resource)
            }}/>
          )

        })}
      </div>
    </div>
  )
}