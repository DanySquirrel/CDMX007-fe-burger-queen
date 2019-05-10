import React from 'react';
import {Link} from 'react-router-dom';


const Navbar =() => (


    <nav>
      <h2 class= "logo"><a class="logo-link" href="#">Menu</a></h2>
      <ul class= "nav-menu">
      <li> <Link className="nav-menu__link" to="/">Desayuno </Link></li>
      <li> <Link className="nav-menu__link" to="/hamburguers">Hamburguesas </Link></li>
      <li> <Link className="nav-menu__link" to="/drinks">Bebidas </Link></li>
      <li> <Link className="nav-menu__link" to="/extra">Complementos </Link></li>
      </ul>

      <ul>
      <li> Cantidad </li>
      <li> Producto </li>
      <li> Precio </li>
      </ul>


    </nav>

);

export default Navbar;
