import React from "react"
import './App.css';
import Home from "./Pages/home"
import Product from "./Components/product"
import Bag from "./Pages/emptybag"
import NotLogged from "./Pages/notlogged"
import Nav from "./Components/nav"
import {BrowserRouter as Router, Route} from "react-router-dom"



function App() {
  return (
    <Router>
    <div className="app">
      <Nav />
      <Route path="/" exact component={Home} />
        
      <Route path="/bags" component={Bag} />
      
      <Route path="/login"  component={NotLogged} />
      
      <Route path="/product" component={Product} />
    </div>
    </Router>
  );
}

export default App;
