import React from 'react'
import Pokemon from './Pokemon'

function PokemonList({lista}) {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
        
        {/*
        //aplica para la funcion "obtenerPokemos"
        lista.map((pokemon,i)=><li key={i}>{pokemon.name}</li>)*/}

            {lista.map((pokemon,i)=>
            <Pokemon key={i} name={pokemon.name} img={pokemon.sprites.front_default} />)
            }
        </div>
    </div>
    </>
  )
}

export default PokemonList