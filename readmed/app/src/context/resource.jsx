import { createContext, useState } from "react";

export const ResourceContext = createContext();
export const ResourceProvider = ({children}) => {

  const [resources, setResources] = useState([]);

  return (
    <ResourceContext.Provider value={{
      resources, 
      setResources,
    }}>
      {children}
    </ResourceContext.Provider>
  )

}