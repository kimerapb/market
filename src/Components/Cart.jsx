import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faReply, faCheck} from '@fortawesome/free-solid-svg-icons'

const Cart = () => {

   const carrito = useContext(CartContext)

   const productosEnCarito = carrito.productosCart

   if (productosEnCarito.length === 0) {
    return <div className="container my-4">
                <h2>Tu carrito está vacío</h2>
                <Link to="/" className="btn btn-primary">Volver <FontAwesomeIcon className="text-white mx-2" icon={faReply}></FontAwesomeIcon></Link>
            </div>
  }


  return (
    <>
        <div className='row'>
        <div className='offset-md-3 col-md-6 flex-column align-items-center justify-content-center'>
        
          {productosEnCarito.map (
            (item) => (
              <CartItem key={item.id} id={item.id} nombre={item.nombre} precio={item.cantidad * item.precio} img={item.img} cantidad={item.cantidad} />
            )
          )}

            <hr/>
            <h2>Total: ${carrito.totalCart()}</h2>

            <button className={`mt-3 mx-1 btn btn-danger ${productosEnCarito.length === 0 ? "d-none" : ""}`} onClick={carrito.vaciarCart}>VACIAR CARRITO <FontAwesomeIcon className="text-white mx-2" icon={faTrash}></FontAwesomeIcon> </button>
            <Link to="/CheckOut" className="mt-3 mx-1 btn btn-success ">TERMINAR COMPRA <FontAwesomeIcon className="text-white mx-2" icon={faCheck}></FontAwesomeIcon></Link>

          </div>
          </div>

    </>

  )
}

export default Cart