import React, { useState } from 'react'
import { getPokemons, getPokemons2 } from '../Apis/consumiendoApi'
import PokemonList from './PokemonList'

function PokemonContainer() {

    const [pokemons,setPokemons]=useState([])

    const obtenerPokemos=()=>{
        getPokemons()
        .then((resultado)=>{
            return resultado.json()
        })
        .then((pokemons)=>{
            //no me queda claro por que utilizar .results
            console.log(pokemons.resultado)
            setPokemons(pokemons.resultado)

        })
    }

    const obtenerPokemosConIMG=()=>{
        let array = []
        for ( let i = 1; i <= 120; i++) {
            getPokemons2(i)
            .then((resultado)=>{
                
                return resultado.json()

            })
            .then((pokemon)=>{
                console.log(pokemon)
                array.push(pokemon)
                setPokemons([...array])

            })
        }
    }

  return (
    <div>

    {/* aplica para la funcion "obtenerPokemos"     
    <button onClick={obtenerPokemos}>Ver Pokemons</button> */ }
    <button onClick={obtenerPokemosConIMG}>Ver Pokemons IMG</button>
    <PokemonList  lista={pokemons}/>


    </div>
  )
}

export default PokemonContainer