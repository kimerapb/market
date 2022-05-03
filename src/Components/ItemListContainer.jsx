import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { db } from '../utils/firebase'
import { collection, getDocs, query, where } from "firebase/firestore"

import ItemList from './ItemList'

export const ItemListContainer = (props) => {

    const[productos,setProductos] = useState([])
    const[loading,setLoading] = useState(true)

    const {categoriaId} = useParams()

  useEffect( () => {
    setLoading(true)

    const productosRef = collection(db, 'items')
    const q = categoriaId ? query(productosRef, where("categoria", "==", categoriaId)) : productosRef

    getDocs(q)
    .then((resp) => {
        setProductos( resp.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))

    })
    .catch((err) => {
    })
    .finally(() => {
      setLoading(false)
    }) 

  }, [categoriaId])

  return (
    <>
        {loading ? <h2>Cargando..</h2> : <ItemList lista={productos}/>}
    </>
  )
}

export default ItemListContainer