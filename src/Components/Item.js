import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './item.css';

const Item = (productos) => {

   const[initial,setClick] = useState(1)
   const[mensaje,setMensaje] = useState('en stock')

    const sumar = ()=>{

        if(initial < productos.stock){
            setClick(initial + 1) 
          setMensaje("en stock ") 
        }  else {
          setMensaje("solo tenemos " + productos.stock + " en stock ") 
        }
      }
    
      const restar = ()=>{
    
        if(initial > 1){
            setClick(initial - 1) 
          setMensaje("en stock ") 
        }
      }


    return (
        <>
            <div className='col-md-4 fondo_item text-black p-2 rounded'>

                <img className='img-fluid' src={productos.img} alt="" />
                <h1>{productos.nombre}</h1>
                <h6>{productos.desc}</h6>
                
                <Link to={`/detail/${productos.id}`}><button className='btn btn-primary'>Ver Más</button></Link>

            </div>

        </>
    )
}

export default Item