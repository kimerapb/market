import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import ItemCount from './ItemCount'
import { pedirDatos } from './pedirDatos/pedirDatos'
import ItemList from './ItemList'


export const ItemListContainer = (props) => {

    const[productos,setProductos] = useState([])
    const[loading,setLoading] = useState(true)

    const {categoriaId} = useParams()

  useEffect( () => {
    setLoading(true)

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

//}, [])
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