import React from "react";
import {
    Link,
  } from "react-router-dom";

// Importing the Bootstrap Components
import { Navbar } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
        <Navbar bg="primary" variant="dark" sticky="top" style={{marginBottom:"10px"}}>
          <Navbar.Brand><Link className="nav-link link-color" to="/">Demo</Link></Navbar.Brand>
        </Navbar>
    );
  }
}

export default Header;
