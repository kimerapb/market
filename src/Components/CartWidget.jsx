
import React from 'react'
import { useContext } from 'react' 
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './CartWidget.css'

//importamos primero fontasome a react con el npm
//importamos la libreria
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// importamos el icono que necesitamos
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {

  //agregaos el CartContex para poder mostrar los iconos en el carrito
  const carrito = useContext(CartContext)

  return (
      <>
        {/* por medio de clases ocultamos o mostramos el icono de carrito  */}
        <Link to='/cart' className={`cart-widget ${carrito.productosCart.length === 0 ? 'cart-hidden' : ''}`}>
        <div>
       
        <span className='badge bg-success'> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> {carrito.cantidadCart()}</span>
        </div>
        </Link>
      </>
    
  )
}
