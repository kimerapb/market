import React, { useState } from 'react'

const ItemDetail = (item) => {

    const[initial,setClick] = useState(1)
    const[mensaje,setMensaje] = useState('en stock')
 
     const sumar = ()=>{
 
         if(initial < item.stock){
             setClick(initial + 1) 
           setMensaje("en stock ") 
         }  else {
           setMensaje("solo tenemos " + item.stock + " en stock ") 
           console.log("🚀 ~ , solo tenemos " + item.stock + " en stock")
     
         }
         console.log("🚀 ~", initial)
     
       }
     
       const restar = ()=>{
     
         if(initial > 1){
             setClick(initial - 1) 
           setMensaje("en stock ") 
           console.log("🚀 ~", initial)
         }
       }



  return (
    <>
    <div className='offset-md-3 col-md-6  bg-dark text-white'>

        <img className='img-fluid' src={item.img} alt="" />
        <h1>{item.nombre}</h1>
        <h6>{item.desc}</h6>
        <h2>{item.precio}</h2>
        <h6>{item.categoria}</h6>

        <h6 >{mensaje}</h6>
        <button onClick={restar}>-</button>

        <span >  {initial}  </span>
        <button onClick={sumar}>+</button><br/><br/> 
    </div>

</>
  )
}

export default ItemDetail