
import React from 'react'
import { useContext, useState } from 'react'
//importacion del CartContext
import { CartContext } from '../../Context/CartContext'
//objetos del plugin de firebase
import { collection, Timestamp, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
//importacion de la validación del correo y del mensaje de Gracias al final de la orden.
import { Validar } from './Validar'
import { Gracias } from './Gracias'

const CheckOut = () => {

	//cartontext
	const carrito = useContext(CartContext)
	const productosEnCarito = carrito.productosCart

	//state de el ide de la orden
	const [ordenId, setOrdenId] = useState(null)

	//state de los campos de texto
	const [values, setValues] = useState({
	  nombre: '',
	  email: '',
	  tel: '',
  })

  	//console.log("🚀 ~ productosEnCarito",productosEnCarito)
    // si el carrito esta vacio
    
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

        //const nombre = e.target[0].value
        //const telefono = e.target[1].value
        //const email = e.target[2].value

        /*
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
        */

        const orden = {
          buyer: values,
          items: productosEnCarito,
          total: carrito.totalCart(),
          fyh: Timestamp.fromDate(new Date())
      } 

        console.log("🚀 ~ orden", orden)

        //generar la referencia para donde vamos a guardar la coleccion si no existe la colecciom en firebase la crea
        const ordersCollection = collection(db,'orders')
        //crear nuevo documento de la orden
        addDoc(ordersCollection, orden)
         .then((doc) => {
          setOrdenId(doc.id)
          //console.log("🚀 ~ doc.id", doc.id) 
          //alert("SU ORDEN FUE GENERADA CON EXITO " + doc.id)
          carrito.vaciarCart();       
        })
        console.log("🚀 ~ docReference -Documento Creado - ")


        /*
        const orden = {
            comprador: values,
            items: cart,
            total: totalCart(),
            fyh: Timestamp.fromDate(new Date())
        } 
    
        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        
        const q = query(productosRef, where(documentId(), 'in', cart.map((el) => el.id)))
        const productos = await getDocs(q)
        const outOfStock = []
        
        productos.docs.forEach((doc) => {
            const item = cart.find((el) => el.id === doc.id)
    
            if (doc.data().stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })
    
        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    vaciarCart()
                })
        } else {
            alert("Hay items sin stock")
        }
        */
    }


      if (ordenId) {
        console.log("🚀 ~ ordenId", ordenId)
        return <Gracias orden={ordenId}/>
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
          {/* <button type="submit" className='btn btn-success' onClick={upDateOrder}>Terminar Compra</button> */}
		  </div>
	</div>
	</>

  )
}

export default CheckOut