import { useContext, useState } from 'react'
import { DevelopmentContext } from './context/development'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilter'
import { Cart } from './components/Cart'
import { products as initialProducts } from './mocks/products.json'
import { CartProvider } from './context/cart.jsx'
import './css/App.css'
import './css/Products.css'

function App() {

  const IS_DEVELOPMENT = useContext(DevelopmentContext);

  const [ products ] = useState(initialProducts);

  const { functionFilter, filters } = useFilters();

  const filteredProducts = functionFilter(products);

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={ filteredProducts }/>
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}

export default App
