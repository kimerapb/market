import React, { useContext } from 'react'
//importamos primero fontasome a react con el npm
//importamos la libreria
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../Context/CartContext'

// importamos el icono que necesitamos

export const CartItem = ({id,nombre,precio,img,cantidad}) => {

	const carritoContext = useContext(CartContext)

  return (
	<>
    <div className='bg-dark text-white rounded'>
		<div className="d-flex flex-row justify-content-between align-items-center p-2 mt-4 px-3 rounded">
            <div className="mr-1">
				<img className="rounded" src={img} width={130} alt="" />
			</div>
            <div className="d-flex flex-column align-items-center">
				<span className="fs-4 font-weight-bold">{nombre}</span>
            </div>
            <div className="d-flex flex-row align-items-center ">

				<FontAwesomeIcon className="text-danger mx-2" icon={faMinus}></FontAwesomeIcon>
                <h5 className="fs-4 text-grey mt-1 mx-2">{cantidad}</h5>
				<FontAwesomeIcon className="text-success mx-2" icon={faPlus}></FontAwesomeIcon>

            </div>
            <div>
                <h5 className="fs-2 text-grey">${precio}</h5>
            </div>
            <div className="fs-4 d-flex align-items-center">
				<FontAwesomeIcon className="text-danger mx-2" icon={faTrash} onClick={()=>{carritoContext.removeItem(id);console.log("clik" + id)}}></FontAwesomeIcon>
			</div>
        </div>
	</div>





	    {/* <h6 >{mensaje}</h6>
        <button onClick={restar}>-</button>

        <span >  {initial}  </span>
        <button onClick={sumar}>+</button><br/><br/>  */}
	</>

  )
}
