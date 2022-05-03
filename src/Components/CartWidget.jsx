
import React from 'react'
import { useContext } from 'react' 
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import './CartWidget.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {

  const carrito = useContext(CartContext)

  return (
      <>
        <Link to='/cart' className={`cart-widget ${carrito.productosCart.length === 0 ? 'cart-hidden' : ''}`}>
        <div>
       
        <span className='badge bg-success'> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> {carrito.cantidadCart()}</span>
        </div>
        </Link>
      </>
    
  )
}
