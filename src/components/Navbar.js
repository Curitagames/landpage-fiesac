import React from 'react'
import './navbar.css'
import logo from '../assets/Logo-fiesac.png'

function Navbar() {
    return (
        <header className="barra-de-navegacion">
            <a href="/" className="logo"><img src={logo} className='logo-fiesac' alt='#'/></a>

            <nav className="navbar">
                <a href="/">Inicio</a>
                <a href="/">Sobre nosotros</a>
                <a href="/">Servicios</a>
                <a href="/">Contáctenos</a>
                <a href="/">Blog</a>
            </nav>

            <a href='/' className='boton-contacto'>Contáctanos</a>
        </header>
    )
}

export default Navbar