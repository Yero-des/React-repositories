import { useContext} from "react";
import { FiltersContext } from "../context/filters";

export const useFilters = () => { 

  // Global state
  const { filters, setFilters } = useContext(FiltersContext);

  const functionFilter = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&  
        (filters.category == 'all' || product.category == filters.category)
      )
    })
  };

  return {    
    functionFilter,
    filters,
    setFilters
  }

} 

