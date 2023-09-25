import '../css/Footer.css'
import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilter'

export const Footer = () => {

  const { filters } = useFilters()

  return (
    <footer className="footer">
      {/* {JSON.stringify(cart, null, 2) } */}
      <div>
        <h4>Precio min: {filters.minPrice}</h4>
        <h4>Categoría: {filters.category}</h4>
      </div>
      <span>@yerohack</span>
      <h5>Shopping Cart con use Context & useReducer</h5>
    </footer>
  )
}