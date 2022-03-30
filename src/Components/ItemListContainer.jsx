import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//importamos la base de datos creada en el archivo de firebase.js
import { db } from '../utils/firebase'
//importa para conectar a firebase
import { collection, getDocs, query, where } from "firebase/firestore"
//import { async } from '@firebase/util'

//import ItemCount from './ItemCount'

//llamar datos de manera local
//import { pedirDatos } from './pedirDatos/pedirDatos'

//llamar a base firebase funcion getData
import { getData } from './getData/getData'
import ItemList from './ItemList'

export const ItemListContainer = (props) => {

    const[productos,setProductos] = useState([])
    const[loading,setLoading] = useState(true)

    const {categoriaId} = useParams()

  useEffect( () => {
    setLoading(true)

    // 1.- armar referencia
    const productosRef = collection(db, 'items')
    const q = categoriaId ? query(productosRef, where("categoria", "==", categoriaId)) : productosRef
    // 2.- pedir esa ref

    getDocs(q)
    .then((resp) => {
      //setProductos(resp)
        setProductos( resp.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))

    })
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
      setLoading(false)
    }) 

    //desde un archivo local
        /*     
        pedirDatos()
        .then((res) => {
            //setProductos(res)
            if (!categoriaId) {
                setProductos( res )
            } else {
                 setProductos( res.filter((prod) => prod.categoria === categoriaId) )
                //setProductos(res)
            }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
           setLoading(false)
        }) 
    }, [categoriaId]) 
  */
  }, [categoriaId])



   //const[initial,setClick] = useState(1)
   //const[mensaje,setMensaje] = useState('en stock')

  return (
    <>
        {/* <h1>{props.greeting}</h1>
        <ItemCount stock="5" initial={initial} mensaje={mensaje}  setMensaje={setMensaje} onAdd={setClick}  />  */}

        {loading ? <h2>Cargando..</h2> : <ItemList lista={productos}/>}
    </>
  )
}

export default ItemListContainer