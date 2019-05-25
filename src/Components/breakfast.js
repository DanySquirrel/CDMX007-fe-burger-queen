import React from 'react';
import data from '../Data/menu.json'




const Breakfast=() => {

  return (
    <div className="container">
    {data.breakfast.map((item)=>(
    
    <button type="button" className="menu-container">
    {item.item} 
    ${item.price}
    <img src={item.image}></img>
    </button>
      
    ))}
    </div>
  );
};



export default Breakfast;