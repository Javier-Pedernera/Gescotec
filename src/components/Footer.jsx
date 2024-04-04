import React from 'react';
import '../sass/components/_Footer.scss';
import logo from '../assets/images/logo5.png'
import { Link } from 'react-router-dom';
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <Link to="/home">
                    <div className="logo"></div>
                </Link>

                <div className="footer-links">
                    {/* <ul>
                        <li><a href="#">Aviso legal</a></li>
                        <li><a href="#">Política de privacidad</a></li>
                        <li><a href="#">Términos de uso</a></li>
                    </ul> */}
                </div>
                <Link to="https://www.linkedin.com/company/gescotec-spa" target="_blank" className="linkedin-link">
                    <BsLinkedin className='LinkedIn_ico' />
                    {/* <RiLinkedinBoxLine className="ci-icon" />
                    <RiLinkedinBoxFill className="bs-icon" /> */}
                </Link>

            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Gescotec SPA. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;