import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import '../css/Products.css'
import { useCart } from '../hooks/useCart.js'

const ItemProduct = ({thumbnail, title, price, isProductInCart, onClickProduct}) => {
  return (
    <li className={isProductInCart ? "product-add-cart" : ""}>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <div>
        <button onClick={onClickProduct}>
          { isProductInCart
            ? <RemoveFromCartIcon/>
            : <AddToCartIcon/>
          }
        </button>
      </div>
    </li>
  )
}

export const Products = ({products}) => {

  const { addToCart, removeFromCart, cart } = useCart()
  
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>

        {products.slice(0,10).map(product => {

          const isProductInCart = checkProductInCart(product);
          return (
            <ItemProduct key={product.id} { ... product } isProductInCart={isProductInCart} onClickProduct={() => {
              isProductInCart
                ? removeFromCart(product)
                : addToCart(product)
            }}/>
          )

        })}

      </ul>
    </main>
  )
}
