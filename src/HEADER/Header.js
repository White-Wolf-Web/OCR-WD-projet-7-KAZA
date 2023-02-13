import React from 'react';
import HLOGO from "./Header-LOGO.png";
import {NavLink} from 'react-router-dom';
import './Header.css';
// import Navbar from '../components/Navbar';


export default function Header() {
  return (
    <div>
    <header className="header">
        <img src={HLOGO} alt="Logo header" className="logo" />
        
        <nav>
            <NavLink to= "/">Acceuil</NavLink>
            <NavLink to = "/about">A propos</NavLink>
        </nav>
    </header>
    </div>
  )
}
