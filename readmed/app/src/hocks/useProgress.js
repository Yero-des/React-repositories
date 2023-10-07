import { useContext } from "react";
import { ResourceContext } from "../context/resource";
import { API } from "../config";

export const useProgress = () => {

  const { resources, setResources } = useContext(ResourceContext);

  // Repara esto plis
  const updateProgressInApi = async (resourceId, newProgress) => {

    const url = `${API}/resources/${resourceId}/`; 
  
    try {
      await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ progress: newProgress }), 
      });  
      console.log('Actualización en la API exitosa');
    } catch (error) {      
      console.error('Error al actualizar en la API:', error);
    }
  };

  const addProgress = resource => {

    const resourceIndex = resources.findIndex(item => item.id === resource.id);

    if (resourceIndex >= 0) {

      updateProgressInApi(resource.id, resource.progress)

      const newResources = structuredClone(resources)
      newResources[resourceIndex].progress += 1

      if (newResources[resourceIndex].progress > resource.progress_max) {
        return alert("Mucha calidad")
      } 

      if (newResources[resourceIndex].progress < 0) {
        return alert("Que estas haciendo ??")
      } 
      
      setResources(newResources);
    }

  }

  const lessProgress = resource => {

    const resourceIndex = resources.findIndex(item => item.id === resource.id);

    if (resourceIndex >= 0) {

      const newResources = structuredClone(resources)
      newResources[resourceIndex].progress -= 1

      if (newResources[resourceIndex].progress > resource.progress_max) {
        return alert("Mucha calidad")
      } 

      if (newResources[resourceIndex].progress < 0) {
        return alert("Que estas haciendo ??")
      } 
      
      setResources(newResources);
    }

  }

  return {
    addProgress,
    lessProgress,
  }

}