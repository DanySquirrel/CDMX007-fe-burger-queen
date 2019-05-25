import React from "react";
import data from '../Data/menu.json'


const Drinks=() => {

  return (
    <div className="container">
    {data.drinks.map((item)=> (

    <button type="button" className="menu-container">
    {item.item} 
    ${item.price}
    <img src={item.image}></img>
    </button>
    
    ))}
    </div>
  );
};

export default Drinks;