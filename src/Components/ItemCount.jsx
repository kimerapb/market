import React from 'react'
import img_bici from '../media/bici1.png'


function ItemCount({ stock, initial, mensaje,  onAdd, setMensaje}) {

    const sumar = ()=>{

      if(initial < stock){
        onAdd(initial + 1) 
        setMensaje("en stock ") 
      }  else {
        setMensaje("solo tenemos 5 en stock ") 
        console.log("🚀 ~ , solo tenemos 5 en stock")

      }
      console.log("🚀 ~", initial)

    }

    const restar = ()=>{

      if(initial > 1){
        onAdd(initial - 1) 
        setMensaje("en stock ") 
        console.log("🚀 ~", initial)
      }
    }

  return (
    <>
    <div className='col-md-4'>
    <img className='img-fluid' src={img_bici} alt=''/><br></br>
    <span >{mensaje}</span><br></br>
      <button onClick={sumar}>+</button> 
      <span >  {initial}  </span>
      <button onClick={restar}>-</button> 
    </div>
    </>
  )
}

export default ItemCount