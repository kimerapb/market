import React, { useState } from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = (props) => {

  const[initial,setClick] = useState(1)
  const[mensaje,setMensaje] = useState('en stock')

  return (
    <>
        <h1>{props.greeting}</h1>

        <ItemCount stock="5" initial={initial} mensaje={mensaje}  setMensaje={setMensaje} onAdd={setClick}  /> 
    </>
  )
}

export default ItemListContainer