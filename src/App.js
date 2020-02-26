import React from 'react';

import './App.css';


import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";

import{BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./styles/custom.css";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Nav />
        <Switch>

        <Route path = "/" exact component = {Home} />
        <Route path ="/contact" component = {Contact} />
        <Route path = "/about" component= {About} />
      
        </Switch>

     
      </Router>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
