
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

   const carritoContext = useContext(CartContext)
   const productosCart = carritoContext.productosCart

   console.log("🚀 ~ productosCart",productosCart)

  return (
    <>
        <div className='row'>
        <div className='offset-md-3 col-md-6 flex-column align-items-center justify-content-center'>
        
          {productosCart.map (
            (item) => (
              <CartItem key={item.id} id={item.id} nombre={item.nombre} precio={item.precio} img={item.img} cantidad={item.cantidad} />
            )
          )}
            {/*hay que utilizar arrow function para poder pasarle la funcion del context si hay que mandarle algun valior
            
            por ejemplo:
            onClick={()=>{carritoContext.removeItem(id)}}

            si no hay que mandarle un valor puede ir directo de la sig manera:
            onClick= {carritoContext.removeItem}
            
            */}
            <button className={`mt-3 btn btn-danger ${productosCart.length === 0 ? "d-none" : ""}`} onClick={carritoContext.clear}>VACIAR CARRITO <FontAwesomeIcon className="text-white mx-2" icon={faTrash}></FontAwesomeIcon> </button>
            {/* <button className='mt-3 btn btn-danger' onClick= {carritoContext.clear}>VACIAR CARRITO <FontAwesomeIcon className="text-white mx-2" icon={faTrash}></FontAwesomeIcon> </button> */}
          </div>
          </div>
    </>

  )
}

export default Cart