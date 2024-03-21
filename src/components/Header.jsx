import { useEffect, useState } from 'react';
import '../sass/components/_Header.scss'
// import logo from '../assets/images/logo.png'
import HamburgerMenu from './HamburguerMenu';
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [openMenu, setopenMenu] = useState(false);
    const [activePage, setActivePage] = useState('');
    const location = useLocation();

    useEffect(() => {
        setActivePage(location.pathname);
      }, [location]);
      
    const showSettings = (e) => {
        e.preventDefault();
    }
    // console.log("header open menu", openMenu);
    console.log("active page name", activePage);
    
    return (
        <header className="header">
            <div className="logo"></div>
            {/* <img src={logo} alt="logo"  /> */}
            <nav className="menu">
                <div className='menuList'>
                    <ul>
                    <li className={activePage === '/home' ? 'active' : ''}>
            <Link to="/home"><span className="menu-link-text">Inicio</span></Link>
          </li>
          <li className={activePage === '/servicios' ? 'active' : 'inactive'}>
            <Link to="/servicios"><span className={activePage === '/servicios' ? 'active' :"menu-link-text"}>Servicios</span></Link>
          </li>
          <li className={activePage === '/equipo' ? 'active' : 'inactive'}>
            <Link to="/equipo"><span className={activePage === '/equipo' ? '' : "menu-link-text"}>Equipo</span></Link>
          </li>
          <li className={activePage === '/contactanos' ? 'active' : ''}>
            <Link to="/contactanos"><span className="menu-link-text">Contacto</span></Link>
          </li>
                    </ul>
                </div>
                <div className="cta">  <Link to="/contactanos" className="link_btn" > Presupuesto</Link > <IoDocumentTextOutline />
                </div>
                <div className='menuBurgerDiv'>
                    <HamburgerMenu setopen={setopenMenu} />
                </div>


            </nav>
        </header>
    );
}

export default Header;