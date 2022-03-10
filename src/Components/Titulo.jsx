import { Component } from 'react';


    const Titulo =(props) => {

        //opcion con destructuring
        //let {texto,subtitulo} = props

        //opcion normal con props
        console.log(props.texto)

        return (
            //se pueden usar esas etiquetas <> llamadas "defragment" para poder poner todos los componentes dentro para no usar un div padre
            //en todas las funciones solo se puede poner un div padre
            <>
            {/*<h1>{texto}</h1>*/}
            <h1>{props.texto}</h1>        
            <h6>{props.subtitulo}</h6>
            </>
        )

    }

export default Titulo