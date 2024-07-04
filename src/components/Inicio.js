import React, { useEffect } from 'react'
import './Inicio.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS



function Inicio() {

    useEffect(() => {
        AOS.init({
            duration: 1400, // Duración de la animación en milisegundos
        });
    }, []);

    return (
            <div className="background-inicio">
                <div className="contenedor-inicio">
                    <h1 className='titulo-inicio' data-aos="fade-up">Corporación FIESAC: Excelencia en Servicios Profesionales de Higiene y Saneamiento Ambiental</h1>
                    <p className='parrafo-inicio' data-aos="fade-up">Ofrecemos soluciones integrales de higiene y saneamiento ambiental para garantizar entornos seguros y saludables.</p>
                    <a href='/' className='boton-conoce' data-aos="fade-up">Conoce más</a>
                </div>
            </div>
    )
}

export default Inicio