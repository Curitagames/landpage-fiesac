import './App.css';
import Navbar from './components/Navbar'
import AboutUs from './components/AboutUs';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Servicios from './components/Servicios';

function App() {

  return (
    <>
      <Navbar />
      <Inicio/>
      <Servicios/>
      <AboutUs/>
      <Contacto/>
    </>
  );
}

export default App;
