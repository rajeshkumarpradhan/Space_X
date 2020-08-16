import React from "react";
import { Spinner } from "react-bootstrap";

class Loader extends React.Component {
 
  render() {
    return (
        <Spinner animation="grow" className="loader-position"/>
    );
  }
}

export default Loader;
