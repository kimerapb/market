import { useState, useEffect } from "react"
import React from 'react'
import {Link} from 'react-router-dom'
//import img_bici from '../media/bici1.png'


function ItemCount({max, cantidad, setCantidad,onAdd}) {

  const[mensaje,setMensaje] = useState('en stock')

const sumar = ()=>{
      if(cantidad < max){
        setCantidad(cantidad + 1) 
        setMensaje("en stock ") 
      }  else {
        setMensaje("solo tenemos " + max + " en stock ") 
        console.log("🚀 ~ , solo tenemos " + max + " en stock")
      }
      console.log("🚀 ~", cantidad)
    }

    const restar = ()=> {
      cantidad > 1 &&
      setCantidad(cantidad - 1)
      setMensaje("en stock ") 
    }

    /*     
    const restar = ()=>{
      if(initial > 1){
        setClick(initial - 1) 
        setMensaje("en stock ") 
        console.log("🚀 ~", initial)
      }
    } */

  return (
    <>
    <div className='col-md-12'>
    {/* <img className='img-fluid' src={img_bici} alt=''/><br></br> */}
    <span >{mensaje}</span><br></br>
      <button onClick={sumar}>+</button> 
      <span >  {cantidad}  </span>
      <button onClick={restar}>-</button><br/>
      <Link className="nav-link" to="/cart">
      <button className='btn btn-success my-2' onClick={onAdd}>Agregar al Carrito</button>
      </Link>

    </div>
    </>
  )
}

export default ItemCount