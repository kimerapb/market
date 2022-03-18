import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { pedirDatos } from './pedirDatos/pedirDatos'

export const ItemDetailContainer = () => {

    const [loading,setLoading] = useState(false)
    const [item,setItem] = useState(null)

    const {itemId} = useParams()
    console.log("🚀 ~ const", itemId)

    useEffect(() => {

        setLoading(true)

        pedirDatos()
        .then((res) => {

            //setProductos(res)
            setItem( res.find((prod) => prod.id === Number(itemId)) )
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
           setLoading(false)
        })
    }, [])
    

  return (
        <>
        {
            loading
            ? <h2>Cargando</h2>
            : <ItemDetail {...item}/>

        }
    
        </>
  )
}

