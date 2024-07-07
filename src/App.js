import './App.css';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';
import WhatsappBoton from './components/WhatsappBoton';

function App() {

  return (
    <>
      <Navbar />
      <div id="inicio"><Inicio /></div>
      <div id="servicios"><Servicios /></div>
      <div id="about-us"><AboutUs /></div>
      <div id="contacto"><Contacto /></div>
      <WhatsappBoton/>
    </>
  );
}

export default App;
