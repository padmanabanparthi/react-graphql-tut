import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-primary">
                <Link to="/" className="navbar-brand" href="#">React and GraphQL - Sample Application</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/categories" className="nav-link"> Categories</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/retailers"className="nav-link"> Retailers</Link>
                    </li>
                </ul>
            </nav>
            
        );
    }
}

export default Navbar