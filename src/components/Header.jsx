import { useState } from 'react';
import '../sass/components/_Header.scss'
// import logo from '../assets/images/logo.png'
import HamburgerMenu from './HamburguerMenu';
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
    const [openMenu, setopenMenu] = useState(false);

    const showSettings = (e) => {
        e.preventDefault();
    }
    // console.log(openMenu);
    return (
        <header className="header">
            <div className="logo"></div>
            {/* <img src={logo} alt="logo"  /> */}
            <nav className="menu">
                <div className='menuList'>
                    <ul>
                        <li><a href="/home">Inicio</a></li>
                        <li><a href="/servicios">Servicios</a></li>
                        <li><a href="/equipo">Equipo</a></li>
                        <li><a href="/contactanos">Contacto</a></li>
                    </ul>
                </div>
                <div className="cta">  <Link to="/contactanos" className="link_btn" > Presupuesto</Link > <IoDocumentTextOutline /></div>
                <div className='menuBurgerDiv'>
                    <HamburgerMenu setopen={setopenMenu} />
                </div>


            </nav>
        </header>
    );
}

export default Header;