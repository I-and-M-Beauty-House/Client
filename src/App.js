import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Home from './Pages/Home/Home';
import ProductDisply from './Pages/Product_Display/ProductDisply';


function App() {
  return (
    <div className='container'>
    <Navigation/>
    <Home/>
    <ProductDisply/>
     
   </div>
  );
}

export default App;
