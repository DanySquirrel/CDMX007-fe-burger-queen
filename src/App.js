// // import React, {Component} from 'react';
// import React from 'react';
// import {BrowserRouter,Route} from "react-router-dom";
// import "./css/style.css";
// import Navbar from "./Components/navbar";
// // import Breakfast from "./Components/breakfast";
// // import Hamburgers from "./Components/hamburgers";
// // import Drinks from "./Components/drinks";
// // import Extra from "./Components/extra";
// import Menu from "./Components/appContext";
// import Importe from "./Components/importe";



// // class App extends Component{

  
// //   render () {

//   function App() {
//   return (
//     <BrowserRouter>
//     <div className="App">
//     <Navbar/> 
//     <Route exact path= "/pagar" component={Importe}/>
//     {/* <Route exact path= "/breakfast" render={ ( )=> <Breakfast/>}/> */}
//     <Route exact path= "/breakfast" component={Menu}/>
//     {/* <Route path= "/hamburgers" render={ ( )=> <Hamburgers/>}/> */}
//     <Route exact path= "/hamburger" component={Menu}/>
//     {/* <Route path= "/extra" render={ ( )=> <Extra/>}/> */}
//     <Route exact path= "/Complements" component={Menu}/>
//     {/* <Route path= "/drinks" render={ ( )=> <Drinks/>}/> */}
//     <Route exact path= "/Bebidas" component={Menu}/>
//     {/* <Route exact path= "/" component={Navbar}/> */}
  
//     </div>

//     {/* <Total/>  */}

//     {/* <Questions /> */}
//      </BrowserRouter>

   
//   );
// }
// //}

// export default App;









import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import "./css/style.css";
import Navbar from "./Components/navbar";
import Breakfast from "./Components/breakfast";
import Hamburgers from "./Components/hamburgers";
import Drinks from "./Components/drinks";
import Extra from "./Components/extra";




class App extends Component{

  
render () {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
   
    <Route exact path= "/" render={ ( )=> <Breakfast/>}/>
   
    <Route path= "/hamburgers" render={ ( )=> <Hamburgers/>}/>
    
    <Route path= "/extra" render={ ( )=> <Extra/>}/>
   
    <Route path= "/drinks" render={ ( )=> <Drinks/>}/>
  
    </div>

    {/* <Total/>  */}

    {/* <Questions /> */}
     </BrowserRouter>

   
  );
}
}

export default App;