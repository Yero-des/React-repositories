import { useState } from "react";

export const useDetails = () => {

  const [details, setDetails] = useState({
    type: 'all'
  });
  
  
  const showByType = (resources) => {
    return resources.filter(resource => {
      return details.type === 'all' || resource.type === details.type
    });
  }

  const changeType = (e) => {
    setDetails({
      type: e.target.value
    });
  }

  return {
    details,
    showByType,
    changeType,
    setDetails,
  }

}