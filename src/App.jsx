import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer';
import Cart from './Components/Cart';
import { CustomCartContext } from './Context/CustomCartContext';
import CheckOut from './Components/checkOut/CheckOut';

function App() {

  return (
    <>
    <CustomCartContext>
    <BrowserRouter>
    <div className="App">
      <header >
          <NavBar/>     
      </header>

      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'hola Bienvenidos a mi Ecommerce'} />} />
        <Route path='/categoria/:categoriaId' element={<ItemListContainer greeting={'hola Bienvenidos a categorias'} />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/CheckOut' element={ <CheckOut/> } />
      </Routes>
    </div>
    </BrowserRouter>
    </CustomCartContext>
    </>
  );
}

export default App;