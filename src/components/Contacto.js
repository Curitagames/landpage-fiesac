import React, { useState, useEffect } from 'react'
import './Contacto.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS

function Contacto() {

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
    };

    useEffect(() => {
        AOS.init({
            duration: 1400, // Duración de la animación en milisegundos
        });
    }, []);

    return (

        <div className='contenedor-contacto'>

            <div className='contenedor-contactame' data-aos="fade-up">
                <div className='titulo-parrafo-contactame'>
                    <h1 className='titulo-contactame'>Contáctame de vuelta</h1>
                    <div className='separacion-horizontal-contacto'></div>
                    <p className='parrafo-contactame'>¡Háganos saber y le hablaremos tan pronto como sea posible!</p>
                </div>

                <div className='contenedor-formulario-contacto'>
                    <form onSubmit={handleSubmit} className='formulario-contacto' data-aos="fade-up">
                        <div className='nombre-apellido-contacto'>
                            <div className='nombre-contacto'>
                                <label htmlFor='nombre'>Nombre</label>
                                <input
                                    type='text'
                                    id='nombre'
                                    value={formData.nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='apellido-contacto'>
                                <label htmlFor='apellido'>Apellido</label>
                                <input
                                    type='text'
                                    id='apellido'
                                    value={formData.apellido}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className='email-contacto'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type='email'
                                id='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='telefono-contacto'>
                            <label htmlFor='telefono'>Teléfono</label>
                            <input
                                type='tel'
                                id='telefono'
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mensaje-contacto'>
                            <label htmlFor='mensaje'>Mensaje</label>
                            <textarea
                                id='mensaje'
                                value={formData.mensaje}
                                onChange={handleChange}
                            />
                        </div>
                        <button type='submit' className='boton-enviar-formulario'>Enviar</button>
                    </form>
                </div>
            </div>

            <div className='contenedor-informacion'>
                <h1 className='titulo-informacion' data-aos="fade-up">Información adicional</h1>
                <div className='informacion-adicional' data-aos="fade-up">
                    <div className='informacion-adicional-seccion'>
                        <h2 className='direccion'>Direcciones principales:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>
                            Dirección fiscal: Jr.Fitzcarrald 1276 Urb. Covida 2da. Etapa - Los Olivos <br />
                        </p>
                        <p>
                            Dirección comercial: Av. Carlos Izaguirre 1385 3er. Piso - Los Olivos <br />
                            (Frente a la Choza Nautica)
                        </p>
                    </div>
                    <div className='informacion-adicional-seccion'>
                        <h2 className='correos'>Correos de contacto:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>
                            rosa.egusquiza@fiesac.com.pe
                        </p>
                        <p>
                            clientes@fiesac.com.pe
                        </p>
                    </div>
                    <div className='informacion-adicional-seccion'>
                        <h2 className='telefonos'>Telefonos de la empresa:</h2>
                        <div className='separacion-horizontal-informacion'></div>
                        <p>Fijo: (01) 532-4273</p>
                        <p>Entel: 994-107-516</p>
                        <p>RPM: 995-622-557</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto