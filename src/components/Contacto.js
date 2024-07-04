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
            <div className='contenedor-horario'>
                <h1 className='titulo-horario' data-aos="fade-up">Horario de atención</h1>
                <div className='dias-horarios' data-aos="fade-up">
                    <div className='lunes-horario'>
                        <h2 className='dia-semana'>Lunes</h2>
                        <p>9:00 "por la mañana" - 6:00 "por la tarde"</p>
                    </div>
                    <div className='martes-horario'>
                        <h2 className='dia-semana'>Martes</h2>
                        <p>9:00 "por la mañana" - 6:00 "por la tarde"</p>
                    </div>
                    <div className='miercoles-horario'>
                        <h2 className='dia-semana'>Miércoles</h2>
                        <p>9:00 "por la mañana" - 6:00 "por la tarde"</p>
                    </div>
                    <div className='jueves-horario'>
                        <h2 className='dia-semana'>Jueves</h2>
                        <p>9:00 "por la mañana" - 6:00 "por la tarde"</p>
                    </div>
                    <div className='viernes-horario'>
                        <h2 className='dia-semana'>Viernes</h2>
                        <p>9:00 "por la mañana" - 6:00 "por la tarde"</p>
                    </div>
                    <div className='sabado-horario'>
                        <h2 className='dia-semana'>Sábado</h2>
                        <p>8:00 "por la mañana" - 12:00 "por la tarde"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacto