import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: [
        [32, 2, 64, 128],
        [1024, 4, 512, 256],
        [2048, " ", 8, " "],
        [" ", " ", 16, 32768]
      ]
    };
    this.cellClass = this.cellClass.bind(this);
  }

  cellClass(value) {
    return (
      "cell" +
      (value === " " ? "" : " tile-" + (value <= 2048 ? value : "super"))
    );
  }

  render() {
    return (
      <div className="Table">
        <div className={this.cellClass(this.state.cells[0][0])}>
          {this.state.cells[0][0]}
        </div>
        <div className={this.cellClass(this.state.cells[0][1])}>
          {this.state.cells[0][1]}
        </div>
        <div className={this.cellClass(this.state.cells[0][2])}>
          {this.state.cells[0][2]}
        </div>
        <div className={this.cellClass(this.state.cells[0][3])}>
          {this.state.cells[0][3]}
        </div>
        <div className={this.cellClass(this.state.cells[1][0])}>
          {this.state.cells[1][0]}
        </div>
        <div className={this.cellClass(this.state.cells[1][1])}>
          {this.state.cells[1][1]}
        </div>
        <div className={this.cellClass(this.state.cells[1][2])}>
          {this.state.cells[1][2]}
        </div>
        <div className={this.cellClass(this.state.cells[1][3])}>
          {this.state.cells[1][3]}
        </div>
        <div className={this.cellClass(this.state.cells[2][0])}>
          {this.state.cells[2][0]}
        </div>
        <div className={this.cellClass(this.state.cells[2][1])}>
          {this.state.cells[2][1]}
        </div>
        <div className={this.cellClass(this.state.cells[2][2])}>
          {this.state.cells[2][2]}
        </div>
        <div className={this.cellClass(this.state.cells[2][3])}>
          {this.state.cells[2][3]}
        </div>
        <div className={this.cellClass(this.state.cells[3][0])}>
          {this.state.cells[3][0]}
        </div>
        <div className={this.cellClass(this.state.cells[3][1])}>
          {this.state.cells[3][1]}
        </div>
        <div className={this.cellClass(this.state.cells[3][2])}>
          {this.state.cells[3][2]}
        </div>
        <div className={this.cellClass(this.state.cells[3][3])}>
          {this.state.cells[3][3]}
        </div>
      </div>
    );
  }
}

export default Table;
