import React, {Component} from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import "./Css/style.css";
import Navbar from "./Components/navbar";
import Breakfast from "./Components/breakfast";
import Hamburguers from "./Components/hamburguers";
import Drinks from "./Components/drinks";
import Extra from "./Components/extra";

// import logo from './logo.svg';
// import './App.css';

class App extends Component{
  render () {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Route exact path= "/" render={ ( )=> <Breakfast/>}/>
    <Route path= "/hamburguers" render={ ( )=> <Hamburguers/>}/>
    <Route path= "/extra" render={ ( )=> <Extra/>}/>
    <Route path= "/drinks" render={ ( )=> <Drinks/>}/>
    
    {/* <Breakfast/> */}
    </div>
     </BrowserRouter>

   
  );
}
}

export default App;
