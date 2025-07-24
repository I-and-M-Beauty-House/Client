import './App.css';
import Navigation from './Component/Navigation/Navigation';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import Category from './Pages/Category/Category';
import Contact from './Pages/ConatctUs/Contact';
import Footer from './Pages/Footer/Footer';
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
     <Contact/>
     <Booking/>
     <Footer/>
     
   </div>
  );
}

export default App;
