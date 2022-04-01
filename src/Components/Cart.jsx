
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { CartItem } from './CartItem'
//para las fechas desde firebase
import { collection, Timestamp, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../utils/firebase'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faReply} from '@fortawesome/free-solid-svg-icons'
import { async } from '@firebase/util'

const Cart = () => {
  
  //const { carrito, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)
   const carrito = useContext(CartContext)

   const productosEnCarito = carrito.productosCart

   console.log("🚀 ~ productosEnCarito",productosEnCarito)

    // si el carrito esta vacio
    if (productosEnCarito.length === 0) {
      return <div className="container my-4">
                  <h2>Tu carrito está vacío</h2>
                  <Link to="/" className="btn btn-primary">Volver <FontAwesomeIcon className="text-white mx-2" icon={faReply}></FontAwesomeIcon></Link>
              </div>
    }
      const sendOrder = async(e)=>{
        e.preventDefault();
        const nombre = e.target[0].value
        const telefono = e.target[1].value
        const email = e.target[2].value

        const nuevaOrden = {
          buyer:{
             name: nombre,
             phone: telefono,
             email: email
          },
          items: productosEnCarito,
          total: carrito.totalCart(),
          //fromDate guarda la fecha en string
          date: Timestamp.fromDate(new Date())

        }
        console.log("🚀 ~ nuevaOrden", nuevaOrden)

        //generar la referencia para donde vamos a guardar la coleccion si no existe la colecciom en firebase la crea
        const ordersCollection = collection(db,'orders')
        //crear nuevo documento de la orden
        const  docReference = await addDoc(ordersCollection, nuevaOrden)
        console.log("🚀 ~ docReference -Documento Creado - ", docReference)

      }
          
      const upDateOrder = async() =>{
        //referencia del documento
        const  docReference = doc(db, 'orders', 'n9YpPc5dtRK9Eay562k2');
        //obtener información del documento'
        const docResponse = await getDoc(docReference);
        //docData en formato Json
        const orderInfo = docResponse.data();
      
        await updateDoc(docReference,{...orderInfo, buyer:{name:'Lupita Rodriguez'}})

      }

  return (
    <>
        <div className='row'>
        <div className='offset-md-3 col-md-6 flex-column align-items-center justify-content-center'>
        
          {productosEnCarito.map (
            (item) => (
              <CartItem key={item.id} id={item.id} nombre={item.nombre} precio={item.cantidad * item.precio} img={item.img} cantidad={item.cantidad} />
            )
          )}

            <hr/>
            <h2>Total: ${carrito.totalCart()}</h2>

            {/*hay que utilizar arrow function para poder pasarle la funcion del context si hay que mandarle algun valior
            
            por ejemplo:
            onClick={()=>{productosEnCarito.removeItem(id)}}

            si no hay que mandarle un valor puede ir directo de la sig manera:
            onClick= {productosEnCarito.removeItem}
            
            */}
            <button className={`mt-3 btn btn-danger ${productosEnCarito.length === 0 ? "d-none" : ""}`} onClick={carrito.vaciarCart}>VACIAR CARRITO <FontAwesomeIcon className="text-white mx-2" icon={faTrash}></FontAwesomeIcon> </button>
            {/* <button className='mt-3 btn btn-danger' onClick= {productosEnCarito.clear}>VACIAR CARRITO <FontAwesomeIcon className="text-white mx-2" icon={faTrash}></FontAwesomeIcon> </button> */}

            <br/><br/>
           <form onSubmit={sendOrder}>

           <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Usuario</span>
            </div>
            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Tel:</span>
            </div>
            <input type="text" className="form-control" placeholder="telefono" aria-label="telefono" aria-describedby="basic-addon1"/>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="mail" className="form-control" placeholder="email" aria-label="email" aria-describedby="basic-addon1"/>
          </div>          

            <button type="submit" className='btn btn-success'>Enviar Orden</button>
            
          </form>

          <button type="submit" className='btn btn-success' onClick={upDateOrder}>Actualizar Producto</button>
          </div>
          </div>

    </>

  )
}

export default Cart