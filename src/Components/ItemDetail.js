import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({id,nombre,desc,precio,categoria,stock,img}) => {

  const[cantidad,setCantidad] = useState(0)
     
      const onAdd = () => {
        const itemAgregarCart = {
          id,
          nombre,
          precio,
          img,
          cantidad
        }
        console.log("🚀 ~ Hemos recibido un evento del ItemCount")
         
      } 
       
  return (
    <>
    <div className='offset-md-3 col-md-6  bg-dark text-white'>

        <img className='img-fluid' src={img} alt="" />
        <h1>{nombre}</h1>
        <h6>{desc}</h6>
        <h2>{precio}</h2>
        <h6>{categoria}</h6>

        <ItemCount 
        max={stock} 
        cantidad={cantidad} 
        setCantidad={setCantidad}
        onAdd={onAdd}
        />

      {/* <h6 >{mensaje}</h6>
        <button onClick={restar}>-</button>

        <span >  {initial}  </span>
        <button onClick={sumar}>+</button><br/><br/>  */}

       
    </div>

  </>
  )
}

export default ItemDetail