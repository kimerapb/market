import React from 'react'
import { useState } from "react";
import { CartContext } from "./CartContext";


export const CustomCartContext = ({children}) => {

	
	const [productosCart, setProductosCart] = useState ([])

	const addItem = (id,nombre,precio,img,cantidad) => {

		if (!isInCart(id)) {
			const Item = {
				//item:{//},
				id, nombre, precio, img, cantidad
			}
			console.log("🚀 ~ addItem", Item)	
			setProductosCart([...productosCart, Item])
        } else {

			/* 
			const productosActualizados = productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad+cantidad)}: prod))
            console.log("🚀 ~ newMproductosActualizadosarkers", productosActualizados)
			setProductosCart(productosActualizados) */

			setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad+cantidad)}: prod)))

		}

	}
	
	const removeItem = (itemId) => {
    	console.log("🚀 ~ removeItem ~ itemId", itemId)

		/*
		const productosActualizados = productosCart.filter(producto=>producto.id !== itemId)
        console.log("🚀 ~ productosActualizados", productosActualizados)
		setProductosCart(productosActualizados) */

		setProductosCart( productosCart.filter((producto) => producto.id !== itemId) )


	}

	const clear = () => {
		console.log("🚀 ~ clear ~ clear", clear)
		//setiar el usestate productosCart a vacio []
		setProductosCart([])
	}

	/* 	const isInCart = (id) => {
		
	} */

    const isInCart = (id) => {

		return productosCart.some((prod) => prod.id === id)

	  }


  return (
	
	<CartContext.Provider value={{productosCart, addItem, removeItem, clear, isInCart}}>
		{children}
	</CartContext.Provider>
  )
}
