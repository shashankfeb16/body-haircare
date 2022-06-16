// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import "swiper/css/bundle";
import './App.css';
import Footer from './HomePageComponents/Footer';
import { Navbar1 } from './HomePageComponents/Navbar1';
import Body from './pages/Body';
import Haircare from './pages/Haircare';
import haircare from "./data/haircare.json"
import Cart from './pages/Cart';
import { CartProvider } from "react-use-cart";
import Navbar from './NavbarComponents/components/Navbar';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar></Navbar>
      </CartProvider>
      {/* <Navbar1></Navbar1> */}
      {/* <Body /> */}
      <CartProvider><Haircare haircare={haircare}></Haircare></CartProvider>
      <Routes>
        <Route path='/body' element={<Body></Body>}></Route>
        <Route path='/haircare' element={<CartProvider><Haircare haircare={haircare}></Haircare></CartProvider>}></Route>
        <Route path='/cart' element={<CartProvider><Cart></Cart></CartProvider>}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
