import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "./App.css";
import Table from "./Table.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount()
  {
    ReactDOM.findDOMNode(this.refs.app).focus();
  }

  render() {
    return (
      <div ref="app" className="App">
        <Table />
      </div>
    );
  }
}

export default App;
