import React, { useEffect } from 'react';
import './aboutUs.css';
import logo1 from '../assets/Logo-template.png'; // Asegúrate de reemplazar estos con los nombres correctos de tus imágenes
import logo2 from '../assets/Logo2-template.png';
import logo3 from '../assets/Logo3-template.png';
import logo4 from '../assets/Logo4-template.png';
import logo5 from '../assets/Logo5-template.png';
import logo6 from '../assets/Logo6-template.png';
import logo7 from '../assets/Logo7-template.png';
import logo8 from '../assets/Logo8-template.png';
import aboutus from '../assets/AboutUs-figura.png';
import VideoAboutUs from '../assets/CorporacionFIESAC.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

// Array de rutas de logos e información adicional
const logos = [
    { src: logo1, alt: "Cliente 1" },
    { src: logo2, alt: "Cliente 2" },
    { src: logo3, alt: "Cliente 3" },
    { src: logo4, alt: "Cliente 4" },
    { src: logo5, alt: "Cliente 5" },
    { src: logo6, alt: "Cliente 6" },
    { src: logo7, alt: "Cliente 7" },
    { src: logo8, alt: "Cliente 8" }
];

function AboutUs() {

    useEffect(() => {
        AOS.init({
            duration: 1400, // Duración de la animación en milisegundos
        });

        // Eventos personalizados para AOS
        document.addEventListener('aos:in', ({ detail }) => {
            detail.setAttribute('data-aos', 'fade-up');
        });

        document.addEventListener('aos:out', ({ detail }) => {
            detail.setAttribute('data-aos', 'fade-down');
        });

    }, []);

    return (
        <div className='contenedor-aboutus'>
            <div className='primer-contenedor-aboutus'>
                <div className='seccion1' data-aos="fade-up">
                    <h1 className='titulo-seccion'>Nuestros clientes</h1>
                </div>
                <div className='separacion-vertical-aboutus' data-aos="fade-up"></div>
                <div className='seccion2' data-aos="fade-up">
                    <div className='logos' data-aos="fade-up">
                        {logos.map((logo, index) => (
                            <img key={index} src={logo.src} alt={logo.alt} className="logo-cliente" data-aos="fade-up"/>
                        ))}
                    </div>
                </div>
            </div>
            <div className='segundo-contenedor-aboutus'>
                <div className='seccion3' data-aos="fade-up">
                    <h1 className='titulo-seccion'>Nuestros resultados</h1>
                    <p>Estamos orgullosos de lo que hemos logrado, pero no nos detenemos aquí.</p>
                </div>
                <div className='seccion4' data-aos="fade-up">
                    <div className="estadisticas" data-aos="fade-up">
                        <div className="estadistica" data-aos="fade-up">
                            <h3>X</h3>
                            <p>Años de experiencia</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3>100%</h3>
                            <p>Clientes satisfechos</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3>X+</h3>
                            <p>Proyectos completados</p>
                        </div>
                        <div className="estadistica" data-aos="fade-up">
                            <h3>X+</h3>
                            <p>Eventos organizados</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tercer-contenedor-aboutus'>
                <div className='seccion5' data-aos="fade-up">
                    <h2 className='subtitulo-seccion'>Sobre nosotros</h2>
                    <h1 className='titulo-seccion'>Bienvenidos</h1>
                    <hr className='separacion-horizontal-aboutus'></hr>
                    <p className='parrafo-bienvenida'>
                        ¡Bienvenidos a la Corporación FIESAC! Nos destacamos por ofrecer contratos de lealtad, servicios excepcionales al cliente y contar con un personal altamente cualificado y con experiencia. Nuestra misión es brindar servicios de saneamiento e higiene profesional y de calidad. ¡Confía en FIESAC para tus necesidades empresariales!
                    </p>
                </div>
                <div className='seccion6' data-aos="fade-up">
                    <img src={aboutus} alt='aboutUs-figura' className='aboutUs-figura'></img>
                </div>
            </div>
            <div className='cuarto-contenedor-aboutus'>
                <div className='video-contenedor' data-aos="fade-up">
                    <video controls className='video'>
                        <source src={VideoAboutUs} type='video/mp4' />
                        Tu navegador no soporta la reproducción de video.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;