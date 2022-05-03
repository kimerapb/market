import React, { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import ItemCount from './ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({id,nombre,desc,precio,categoria,stock,img}) => {

  const carritoContext = useContext(CartContext)

  const[cantidad,setCantidad] = useState(0)
  const[stockProducto,setStockProducto] = useState(stock)
     
      const onAdd = (quantityToAdd) => {
        setCantidad (quantityToAdd)
        setStockProducto(stockProducto-quantityToAdd)
        carritoContext.addItem(id,nombre,precio,img,cantidad)
         
      } 
       
  return (
    <>
      <div className='offset-md-3 col-md-6  bg-dark text-white'>

          <img className='img-fluid' src={img} alt="" />
          <h1>{nombre}</h1>
          <h6>{desc}</h6>
          <h2>{precio}</h2>
          <h6>{categoria}</h6>

      {
        carritoContext.isInCart(id) 
        ?  <Link className="btn btn-success my-3" to="/Cart">Terminar mi compra</Link>
        : <>  
            <ItemCount 
            id= {id}
            max={stock} 
            cantidad={cantidad} 
            setCantidad={setCantidad}
            onAdd={onAdd}
            />
          </>
      }

      </div>

  </>
  )
}

export default ItemDetail