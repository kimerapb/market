import logo from './logo.svg';
import './App.css';

function App() {

  let condition = false
  
  /*
  let resultado = null
  if (condition){

    resultado = 'verdadero'
  } else {

    resultado = 'falso'

  }
  console.log('el resultado es ' + resultado)
  */

  //terciario
  //condition ? true : false

  //sugar syntax
  //console.log(`El Resultado es: ${condition?"verdadero":"falso"}`)

  //spread operator ...

    /*
  let a = 'a'
  let array=['b','c','d']
  let newarray = [a,...array]
  console.log(newarray)
  */

 /*
  let obj = {
    nombre: 'carolina',
    edad: 20,
    apellido: 'garcia'
  }
  */

   /*
  const nombre = obj.nombre
  const edad = obj.edad
   console.log(nombre)
   console.log(edad)
   */

   // si la varible es igual a el objeto javascript nos deja omitir el declarar la variable
   //const {nombre, edad} = obj
   // si la varible es igual a el objeto javascript nos deja omitir el declarar la variable
   //console.log(nombre)
   //console.log(edad)

   //renombrar el atributo de nuestro objeto
  //const {nombre:PrimerNombre}= obj
  //console.log(PrimerNombre)

  //asignación por destructuracion

  //si no existe apellido toma el que le asignas por defecto si no toma el del arreglo original
  //const {nombre,apellido='rdz'} = obj
  //console.log(apellido)

  /*
  const apellido = "carmenLU"

  const id="1243435242"
  
  let obj={
    nombre: 'Carmen',
    edad: 20,
    ['apellido'+id]:'Castillo'
  }

  console.log(obj)
  */

  let nombre = 'Luis Eduardo Rodriguez'

  return (
    <div className="App">
      <header className="App-header" >

      <div className='Color_Aqua' style={{backgroundColor:"green"}}>{nombre}</div>

        <img src={logo} className="App-logo" alt="logo" ></img>
        <img src="/static/media/logo.6ce24c58023cc2f8fd88fe9d219db6c6.svg" className="App-logo"  alt="logo" ></img>

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
