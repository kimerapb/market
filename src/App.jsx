import logo from './logo.svg';
import './App.css';

//import { Component } from 'react';

//import Titulo from './Components/Titulo';
//import BigCard from './Components/BigCard';
//import ComponenteContenedor from './Components/ComponenteContenedor';
//import Card from './Components/Card';
import NavBar from './Components/NavBar';
import './promesas/promesas'
import ItemListContainer from './Components/ItemListContainer';

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
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting={'hola Bienvenidos a mi Ecommerce'} />
      <header className="App-header" >
      
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

        <img src={logo} className="App-logo" alt="logo" ></img>
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
        </a>
      </header>
    </div>
  );
}

export default App;
