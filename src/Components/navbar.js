import React from 'react';
import {NavLink} from 'react-router-dom';




const Navbar =() => (


    <nav>
      <div className= "menu">
      <h2 className="logo"><a className="logo-link" href=""> </a></h2>
      <ul className= "nav-menu">
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/">Desayuno </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/hamburgers">Hamburguesas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/drinks">Bebidas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/extra">Complementos </NavLink></li>
      </ul>
      </div>

    

    </nav>

);

export default Navbar;
