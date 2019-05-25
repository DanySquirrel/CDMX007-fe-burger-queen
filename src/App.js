import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import "./css/style.css";
import Navbar from "./Components/navbar";
import Breakfast from "./Components/breakfast";
import Hamburgers from "./Components/hamburgers";
import Drinks from "./Components/drinks";
import Extra from "./Components/extra";
import Total from "./Components/total";




// import logo from './logo.svg';
// import './App.css';

class App extends Component{


  
  render () {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>"
     {/* <Route path=5'/___' component={___} /> */}
    <Route exact path= "/" render={ ( )=> <Breakfast/>}/>
    <Route path= "/hamburgers" render={ ( )=> <Hamburgers/>}/>
    <Route path= "/extra" render={ ( )=> <Extra/>}/>
    <Route path= "/drinks" render={ ( )=> <Drinks/>}/>
    
    {/* <Breakfast/> */}
    </div>

    <Total/>
     </BrowserRouter>

   
  );
}
}

export default App;
