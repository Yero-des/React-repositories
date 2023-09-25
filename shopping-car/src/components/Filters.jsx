import { useId } from "react";
import { useFilters } from "../hooks/useFilter";
import "../css/Filters.css";

export const Filters = () => {
  // Use with global state
  const { filters, setFilters } = useFilters();

  // Unique ID universal
  const minPriceFilterId = useId();
  const minPriceInputFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeMinPriceInput = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleChangeCategory = (e) => {
    //Function native to child component
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="filters">
      <div className="row-filters">
        <label>Precio minimo</label>
        <input id={minPriceInputFilterId} type="number" value={filters.minPrice} onChange={handleChangeMinPriceInput}/>
      </div>
      <div className="row-filters">
        <div>
          <label htmlFor="price">Precio</label>
          <input
            type="range"
            id={minPriceFilterId}
            min={0}
            max={filters.maxPrice}
            onChange={handleChangeMinPrice}
            value={filters.minPrice}
          />
          <span>{filters.minPrice}</span>
        </div>

        <div>
          <label htmlFor={categoryFilterId}>Categoria</label>
          <select id={categoryFilterId} onChange={handleChangeCategory}>
            <option value={"all"}>Todas</option>
            <option value={"laptops"}>Portatiles</option>
            <option value={"smartphones"}>Celulares</option>
          </select>
        </div>
      </div>
    </section>
  );
};
