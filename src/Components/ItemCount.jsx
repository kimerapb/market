import { useState } from "react"
import React from 'react'

function ItemCount({max, cantidad, setCantidad,onAdd}) {

  const[mensaje,setMensaje] = useState('en stock')

const sumar = ()=>{
      if(cantidad < max){
        setCantidad(cantidad + 1) 
        setMensaje("en stock ") 
      }  else {
        setMensaje("solo tenemos " + max + " en stock ") 
      }
    }

    const restar = ()=> {
      cantidad > 1 &&
      setCantidad(cantidad - 1)
    }

  return (
    <>
    <div className='col-md-12'>
    <span >{mensaje}</span><br></br>
    <button disabled={max===0} onClick={restar}>-</button>

      <span >  {cantidad}  </span>
      <button disabled={max===0} onClick={sumar}>+</button> <br/>
      <button className='btn btn-primary my-2' disabled={max===0} onClick={() => {onAdd(cantidad)}}>Agregar al Carrito</button>

    </div>
    </>
  )
}

export default ItemCount