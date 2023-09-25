import { createContext, useState } from "react";

// 1. Create the context
export const FiltersContext = createContext();

// 2. Create the provider
export const FiltersProvider = ({children}) => {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: 1749
  });

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}