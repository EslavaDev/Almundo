import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'mdbreact';
import logo from '../../assets/images/logo-almundo.svg'
class Navegacion extends Component {
  render() {
    return (
      <div>
        <Navbar color="unique-color-dark" dark>
            <NavbarBrand href="#">
                <img src={logo} height="40" className="d-inline-block align-top"/>
            </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Navegacion;