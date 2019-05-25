import React from "react";
import data from '../Data/menu.json'


const Hamburgers=() => {
 
  return(
  <div className="container">
  {data.restOfTheDay.map((item)=>( 
    
    <button type="button" className="menu-container">
    {item.item} 
    ${item.price} 
    <img src={item.image}></img>
    </button>

 ))}
  </div>
);
};


export default Hamburgers;