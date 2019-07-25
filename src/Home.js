import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Navbar from './Navbar';
import Categories from './Categories';
import Retailers from './Retailers';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        users: []
      };
  }

  render() {
   
    return (
            <div className="container">
                <Navbar/>
                <div className="row mt-4">
                    <div className="col-md-12 mb-3">
                        <h2>Categories</h2>
                    </div>
                    <Categories/>
                </div>
                <div className="row mt-4">
                    <div className="col-md-12 mb-3">
                        <h2>Retailers</h2>
                    </div>
                    <Retailers/>
                </div>
            </div>    
          )
  }
}

export default Home;