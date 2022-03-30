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

	const vaciarCart = () => {
		console.log("🚀 ~ vaciarCart ~ vaciarCart", vaciarCart)
		//setiar el usestate productosCart a vacio []
		setProductosCart([])
	}

    const cantidadCart = () => {
		return productosCart.reduce((acc, prod) => acc + prod.cantidad, 0)
	}
  
	const totalCart = () => {
		return productosCart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
	}

    const isInCart = (id) => {
		return productosCart.some((prod) => prod.id === id)
	}

	const sumarItem = (id) => {
		setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad+1)}: prod)))
	}

	const restarItem = (id) => {
		setProductosCart( productosCart.map(prod => (prod.id === id ? {...prod, cantidad: (prod.cantidad-1)}: prod)))
	}


  return (
	
	<CartContext.Provider value={{productosCart, addItem, removeItem, vaciarCart, isInCart, totalCart, cantidadCart, restarItem, sumarItem  }}>
		{children}
	</CartContext.Provider>
  )
}
