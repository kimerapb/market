import React from 'react'
import { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { collection, Timestamp, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { Validar } from './Validar'
import { Gracias } from './Gracias'

const CheckOut = () => {

	const carrito = useContext(CartContext)
	const productosEnCarito = carrito.productosCart

	const [ordenId, setOrdenId] = useState(null)

	const [values, setValues] = useState({
	  nombre: '',
	  email: '',
	  tel: '',
  })

  
	const sendOrder = async(e)=>{
        e.preventDefault();
        Validar(values) && generarOrden(values, productosEnCarito, carrito.totalCart, setOrdenId, carrito.vaciarCart)
      }
       
      const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

      const generarOrden = async (values, productosEnCarito, totalCart, setOrderId, vaciarCart) => {

        const orden = {
          buyer: values,
          items: productosEnCarito,
          total: carrito.totalCart(),
          fyh: Timestamp.fromDate(new Date())
      } 

        const ordersCollection = collection(db,'orders')

        addDoc(ordersCollection, orden)
         .then((doc) => {
          setOrdenId(doc.id)
          carrito.vaciarCart();       
        })

    }
      if (ordenId) {
        return <Gracias orden={ordenId}/>
      }

  return (
	<>
	
	<div className='row'>
        <div className='offset-md-3 col-md-6 flex-column align-items-center justify-content-center'>

			<h3>Información necesaria para generar la orden:</h3><br/>

           <form onSubmit={sendOrder}>

           <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Nombre</span>
            </div>
            <input type="text" 
            className="form-control" 
            placeholder="Nombre" 
            aria-label="Nombre" 
            value={values.nombre}
            onChange={handleInputChange}
            name='nombre'
            aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Tel:</span>
            </div>
            <input type="text" 
            className="form-control" 
            placeholder="telefono" 
            aria-label="telefono" 
            value={values.tel}
            onChange={handleInputChange}
            name='tel'
            aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="mail" 
            className="form-control" 
            placeholder="email" 
            aria-label="email" 
            value={values.email}
            onChange={handleInputChange}
            name='email'
            aria-describedby="basic-addon1"/>
          </div>          

            <button type="submit" className='btn btn-success'>Generar Orden</button>

          </form>
		  </div>
	</div>
	</>

  )
}

export default CheckOut