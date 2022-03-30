import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

//import { pedirDatos } from './pedirDatos/pedirDatos'
import { db } from '../utils/firebase'
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    const [loading,setLoading] = useState(false)
    const [item,setItem] = useState(null)

    const {itemId} = useParams()
    console.log("🚀 ~ const", itemId)

    useEffect(() => {
        setLoading(true)

        // 1.- referencia al document
        const docRef = doc(db, "items", itemId)
        // 2.- peticion del doc
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(()=> {
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

