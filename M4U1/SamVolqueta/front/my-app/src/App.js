//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.min.js":


import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";


import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import GaleriaPage from "./pages/GaleriaPage";
import ServiciosPage from "./pages/ServiciosPage";
import ContactoPage from "./pages/ContactoPage";


function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Nosotros" element={<NosotrosPage />} />
        <Route path="/Servicios" element={<ServiciosPage />} />
        <Route path="/Galeria" element={<GaleriaPage />} />
        <Route path="/Novedades" element={<NovedadesPage />} />
        <Route path="/Contacto" element={<ContactoPage />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
