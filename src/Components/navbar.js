import React from 'react';
import {NavLink} from 'react-router-dom';
import logoBQ from "../assets/descarga.png";
import "../css/style.css";




const Navbar = props => (
    <nav>
      <div className= "menu">
      <img className= "logo-nav" src= {logoBQ} alt="logo-icon" />
      <ul className= "nav-menu">
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/">Desayuno </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/hamburgers">Hamburguesas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/drinks">Bebidas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/extra">Complementos </NavLink></li>
      </ul>
      </div>
      <div className= "total">
      
      <ul className= "nav-menu">
      <li className="nav-total"> <span className="nav-total__link" >Catidad </span></li>
      <li className="nav-total"> <span className="nav-total__link" >Producto </span></li>
      <li className="nav-total"> <span className="nav-total__link" >Precio</span></li>
      </ul>
      </div>

    

    </nav>

);

export default Navbar;



