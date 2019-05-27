
// import React, {Component} from 'react';
// // import data from '../Data/menu.json';
// // import Breakfast from "./breakfast";


// class Ticket extends Component {
 
//   render() {
   
//     return (
//       <div className="Ticket">
//       {/* <h4>Ticket</h4> */}
//       <button>Cancelar</button>
//       <button>Editar</button>
//       <button>Confirmar</button>
       
//       </div>
//     );
//   }
// }

// export default Ticket;


//_______________________________________

// class Total extends Component {

//     _remove (){
  
//       if (this.props.onRemove)
//       this.props.onRemove();
//     }

//     render (){
//         return (
//             <li>
//                 <div className="ticket">
//                 <span className= "item-ticket">{this.props.data.item}</span>
//                 </div>
//                 <div>
//                 <span className= "price-ticket">${this.props.data.price}</span>
//                 </div>
//                 <div>
//                 <button className="remove" onClick={this._remove.bind(this)}>
//                        {/* <i className="material-icons">eliminar</i> */}
//                 </button> 
//                 </div>
//             </li>
//         )
//     }
  
//   }



// export default Total;


// _________________________

// export default class Questions extends React.Component {
//     state = {
//       item: []
//     };
  
//     addItems = item => {
//       this.setState(prevState => ({
//         breakfast: [...prevState.breakfast, item]
//       }));
//     };
  
//     render() {
//       return (
//         <div id="container">
//     {this.state.breakfast.map((item)=> (
// <button key={item.item} type="button" className="menu-container"onClick={this.addItem} >
//     {item.item}
//      ${item.price}
//       <img src={item.image}></img>
//       </button>

//             ))}
        
//           <AddItemButton onClick={this.item} />
//         </div>
//       );
//     }
//   }
  
//   class AddItemButton extends React.Component {
//     addItem = () => {
//       this.props.onClick(
//         item.item,
//         item.price 
//       );
//     };