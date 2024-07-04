import React, { useEffect } from 'react';
import './Listaprecios.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function ListaPrecios ()  {

    useEffect(() => {
        AOS.init({
            duration: 1800, // Duración de la animación en milisegundos
        });
    }, []);

    return (
        <div className="contenedor-lista-precios">
            <div className='titulo-descripcion-lista-precios' data-aos="fade-up">
                <h3>Servicios</h3>
                <h1>Lista de precios</h1>
            </div>
            <div className='tarjetas-lista-servicios' data-aos="fade-up">
                <div className="lista-servicios-grid">
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Asesoramiento Legal</h4>
                            <p>Reciba asesoramiento legal experto en diferentes áreas del derecho para resolver sus necesidades legales de manera confiable y eficaz.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Gestión de Proyectos</h4>
                            <p>Optimice la gestión de sus proyectos con nuestro equipo experimentado que garantiza la organización y ejecución eficiente.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Asesoría Contable</h4>
                            <p>Obtenga asesoría contable especializada para mantener la salud financiera de su empresa y cumplir con las obligaciones fiscales.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Desarrollo de Software a Medida</h4>
                            <p>Obtenga soluciones tecnológicas personalizadas que se ajusten a las necesidades específicas de su negocio para una mayor eficiencia.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Consultoría de Recursos Humanos</h4>
                            <p>Mejore la gestión del talento y el clima laboral a través de nuestra consultoría especializada en recursos humanos.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                    <div className="servicio" data-aos="fade-up">
                        <div className='servicio-descripcion'>
                            <h4>Servicios de Traducción</h4>
                            <p>Acceda a servicios profesionales de traducción que aseguran la precisión y fluidez en diferentes idiomas para sus documentos y comunicaciones.</p>
                        </div>
                        <div className='boton-precio'>
                            <button>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListaPrecios;
