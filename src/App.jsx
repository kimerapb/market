import logo from './logo.svg';
import './App.css';
//iportacion de react ruter dom para poder hacer los redirecionamientos en react
import {BrowserRouter,Routes,Route} from "react-router-dom";
//import { Component } from 'react';

//import Titulo from './Components/Titulo';
//import BigCard from './Components/BigCard';
//import ComponenteContenedor from './Components/ComponenteContenedor';
//import Card from './Components/Card';
import NavBar from './Components/NavBar';
import './promesas/promesas'
import ItemListContainer from './Components/ItemListContainer';

import './Apis/consumiendoApi'
import PokemonContainer from './Components/PokemonContainer';
import PokemonList from './Components/PokemonList';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { CustomCartContext } from './Context/CustomCartContext';
//iportacion del contexto para utilizarlo en todo el sitio con react


function App() {

  /*
  let nombre =  "luis Eduardo Rodriguez"

  //muestros (estados de App)
  let text = 'Clase #3 de ReactJS'
  let subtitulo = 'Componentes'

  const saludar =() =>{
    let num = 12
    let num2 = num++
    console.log('HOLA CODERS',num2)
  }
    */
 

  // Titulo('hola') == <Titulo texto='algo aqui' />
  return (
    <>
   {/*  <PokemonContainer/> */}
    <CustomCartContext>
    <BrowserRouter>
    <div className="App">
      <header >
      {/*
      <BigCard ejecutar={saludar} />

       <ComponenteContenedor></ComponenteContenedor>

      <Card>
        <Titulo/>
        </Card>
      */}

      {/*<Titulo texto='Clase #4 de ReactJS' subtitulo='Componentes'/>*/}

      {/*
      <Titulo texto={text} subtitulo={subtitulo}/>

      <div className='Color_Aqua' style={{backgroundColor:"green"}}>
      </div>
      */
      }   
        {/* ejemplo para el uso de apis */}
        {/* <PokemonContainer/> */}


          {/* <img src={logo} className="App-logo" alt="logo" ></img>
          <p>           
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a> */}

          <NavBar/>     
      </header>

      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'hola Bienvenidos a mi Ecommerce'} />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'hola Bienvenidos a categorias'} />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </BrowserRouter>
    </CustomCartContext>
    </>
  );
}

export default App;

