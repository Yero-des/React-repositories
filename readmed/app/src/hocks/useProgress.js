import { useContext } from "react";
import { ResourceContext } from "../context/resource";
import { API } from "../config";

export const useProgress = () => {

  const { resources, setResources } = useContext(ResourceContext);

  // Repara esto plis
  const updateProgressInApi = async (id, progress) => {

    const url = `${API}/resources/${id}/update-progress/`; 
  
    try {
      await fetch(url, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ progress: progress }), 
      });  
      console.log(`Update successful for ${id} in progress ${progress}`);
    } catch (error) {      
      console.error('Error API:', error);
    }

  };

  const addProgress = resource => {

    const resourceIndex = resources.findIndex(item => item.id === resource.id);

    if (resourceIndex >= 0) {
    
      const newResources = structuredClone(resources)
      const resourceUpdateProgress = newResources[resourceIndex].progress += 1

      
      if (resourceUpdateProgress > resource.progress_max) {
        return alert("Mucha calidad")
      } 
      
      if (resourceUpdateProgress < 0) {
        return alert("Que estas haciendo ??")
      } 
      
      // Update API
      updateProgressInApi(resource.id, resourceUpdateProgress)
      setResources(newResources);
    }

  }

  const lessProgress = resource => {

    const resourceIndex = resources.findIndex(item => item.id === resource.id);

    if (resourceIndex >= 0) {

      const newResources = structuredClone(resources)
      const resourceUpdateProgress = newResources[resourceIndex].progress -= 1

      
      if (resourceUpdateProgress > resource.progress_max) {
        return alert("Mucha calidad")
      } 
      
      if (resourceUpdateProgress < 0) {
        return alert("Que estas haciendo ??")
      } 
      
      // Update API
      updateProgressInApi(resource.id, resourceUpdateProgress)
      setResources(newResources);
    }

  }

  return {
    addProgress,
    lessProgress,
  }

}