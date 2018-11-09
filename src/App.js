import React, { Component } from "react";
import "./App.css";
import Table from "./Table.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
