import './App.css';
import Navigation from './Component/Navigation/Navigation';
import About from './Pages/About/About';
import Category from './Pages/Category/Category';
import Home from './Pages/Home/Home';
import ProductDisply from './Pages/Product_Display/ProductDisply';


function App() {
  return (
    <div className='container'>
    <Navigation/>
    <Home/>
    <ProductDisply/>
     <Category/>
     <About/>
   </div>
  );
}

export default App;
