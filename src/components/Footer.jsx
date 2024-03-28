import React from 'react';
import '../sass/components/_Footer.scss';
import logo from '../assets/images/logo5.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/home">
                    <div className="logo"></div>
                </Link>
                {/* <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                </div> */}
                <div className="footer-links">
                    {/* <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Términos de uso</a></li>
                    </ul> */}
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Gescotec SPA. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;