import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Route path='/'  Component={Home}/>
      <Route path='/cart'  Component={Cart}/>
      <Route path='/checkout'  Component={Checkout}/>
      <Route path='/product'  Component={ProductDetails}/>
      
  
    </BrowserRouter>
  );
}

export default App;
