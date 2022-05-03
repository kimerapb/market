import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReply} from '@fortawesome/free-solid-svg-icons'

export const Gracias = ({orden}) => {

  return (
	<>

				<div className="container my-5">
					<h1 ><span className='badge bg-success'>Gracias por tu compra!</span></h1>
					<hr/>
					<h3>Tu número de orden es:</h3>
					<h2 className='text text-primary'>{orden}</h2>
					<Link to="/" className=" mt-2 btn btn-primary">Volver <FontAwesomeIcon className="text-white mx-2" icon={faReply}></FontAwesomeIcon></Link>
				</div>

	</>
  )
}
