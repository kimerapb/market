
import React from 'react'

//importamos primero fontasome a react con el npm
//importamos la libreria
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// importamos el icono que necesitamos
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'


export const CartWidget = () => {
  return (
      <>
        <div><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></div>
      </>
    
  )
}
