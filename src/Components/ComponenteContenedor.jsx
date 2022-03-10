import React from 'react'
import BigCard from './BigCard'
import Titulo from './Titulo'

const ComponenteContenedor = () => {

  //muestros (estados de App)
  let text = 'Clase #3 de ReactJS'
  let subtitulo = 'Componentes'
  const saludar =() =>{

    let num = 10
    let num2 = num++

    console.log('HOLA CODERS',num2)
  }
  
  return (
    <>

    <Titulo texto={text} subtitulo={subtitulo}/>
      <BigCard ejecutar={saludar} />

    </>
  )
}

export default ComponenteContenedor