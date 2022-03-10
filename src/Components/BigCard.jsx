import React from "react";
import Titulo from "./Titulo";


export const BigCard = ({ejecutar})=>{

    return(
    <>
    <Titulo texto="soy un Titulo de Big Card" subtitulo="Soy subtitulo de Big Card"/>
    <div>Esta es una Seccion</div>
    <button onClick={ejecutar}></button>
    

    </>
    )

}

export default BigCard