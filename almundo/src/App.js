import React, { Component } from 'react';

import Navegacion from './components/navegacion/navegacion';

import Home from './containers/home/home';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter, Redirect , Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <div>
                  <div className="App-header">
                    <Navegacion />
                  </div>
                  <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/home" component={Home} />
                   
                  </Switch>
                    
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
