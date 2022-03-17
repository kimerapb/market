import React, { useState, useEffect } from 'react'
//import ItemCount from './ItemCount'
import {base} from './Db/base.js'
import ItemList from './ItemList'


export const ItemListContainer = (props) => {

    const[productos,setProductos] = useState([])
    const[loading,setLoading] = useState(true)


 const pedirDatos = () => {
      return new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve(base)
          }, 1500)
      })
  }

  useEffect( () => {
    setLoading(true)

    pedirDatos()
        .then((res) => {

            setProductos(res)
            // if (!categoryId) {
            //     setProductos( res )
            // } else {
            //     // setProductos( res.filter((prod) => prod.categoria === categoryId) )
            //     setProductos(res)
            // }
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
           setLoading(false)
        })

}, [])
// }, [categoryId])


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