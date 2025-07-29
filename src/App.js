import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Booking from './Pages/Booking/Booking';
import Footer from './Pages/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Section_Container from './Pages/Section_Container';
import EyeBrowService from './Pages/Sub_Category/Eye_Brow_Category/EyeBrowService';
import HairCategory from './Pages/Sub_Category/Hair_Category/HairCategory';
import HairRemoval from './Pages/Sub_Category/HairRemoval_Category/HairRemoval';
import Makeup from './Pages/Sub_Category/Makup_Category/Makeup';
import NailCategory from './Pages/Sub_Category/Nail-category/NailCategory';
import SkinCareCategory from './Pages/Sub_Category/SkinCare_Category/SkinCareCategory';


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
        <Route path="/eyebrow" element={<EyeBrowService  />} />
        <Route path="/hair" element={<HairCategory />} />
        <Route path="/hair-removal" element={<HairRemoval />} />
        <Route path="/makaup" element={<Makeup />} />
        <Route path="/nail" element={<NailCategory />} />
        <Route path="/skin-care" element={<SkinCareCategory />} />
      </Routes>
      <Footer />
      </Router>
  );
}

export default App;
