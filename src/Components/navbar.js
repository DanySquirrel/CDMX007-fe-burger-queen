import React from 'react';
import {NavLink} from 'react-router-dom';
import logoBQ from "../assets/descarga.png";
import "../css/style.css";
// import React, { Component } from 'react';




const Navbar =()=> (
    <nav>
      <div className= "menu">
      <ul className= "nav-menu">
      <img className= "logo-nav" src= {logoBQ} alt="logo-icon" />
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/">Desayuno </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link" to="/hamburgers">Hamburguesas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/drinks">Bebidas </NavLink></li>
      <li className="nav-menu"> <NavLink className="nav-menu__link"  to="/extra">Complementos </NavLink></li>
      </ul>
      </div>

      <div className= "total-nav">
      
      <ul className= "total">
      <li className="nav-total"> Catidad </li>
      <li className="nav-total"> Producto </li>
      <li className="nav-total"> Precio </li>
      </ul>

      
      </div>

    // ticket

    </nav>

);

export default Navbar;



// class Navbar extends Component {
  
//   render() {
//       return (
//         <header className='header'>
//          <nav>
//              <div className="menu">
//                <ul className="nav-menu">
//                <img className= "logo-nav" src= {logoBQ} alt="logo-icon" />
//                  <li className="nav-menu"><NavLink className="nav-menu_link" activeClassName="activate" exact to="/breakfast">Desayuno</NavLink></li>
//                  <li className="nav-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/hamburgers">Hamburguesas</NavLink></li>
//                  <li className="nav-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/drinks">Bebidas</NavLink></li>
//                  <li className="nav-menu"><NavLink className="nav-menu_link" activeClassName="activate" to="/extra">Complementos</NavLink></li>                   
                 
                 
//                </ul>
//              </div>
//          </nav> 
//      </header>
//       )
//   }
// }

// export default Navbar;