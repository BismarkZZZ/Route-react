import React from "react";
import {
  BrowserRouter as AppRouter,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Services from "./component/Services";
import ServiceDetails from "./component/ServiceDetails";

export default function App() {
  return (
    <AppRouter>
      
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
          </ul>
        </nav>

       
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route path="/services/:id" component={ServiceDetails} />
        
    </AppRouter>
  );
}