import React from 'react';
import '../sass/components/_Footer.scss';
import logo from '../assets/images/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Términos de uso</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Nombre de tu empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;