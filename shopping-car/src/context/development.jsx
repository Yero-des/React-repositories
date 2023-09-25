import { createContext } from "react";

export const DevelopmentContext = createContext();
export const DevelopmentProvider = ({children}) => {

  const IS_DEVELOPMENT = process.env.NODE_ENV != 'production';

  return (
    <DevelopmentContext.Provider value={IS_DEVELOPMENT}>
      {children}
    </DevelopmentContext.Provider>
  )

}