import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section_Container from './Pages/Section_Container';


function App() {
  return (
  //   <div className='container'>
  //   <Navigation/>
  //   <Home/>
  //   <ProductDisply/>
  //    <Category/>
  //    <About/>
  //    <Contact/>
  //    <Booking/>
  //    <Footer/>
     
  //  </div>
  <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Section_Container />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
