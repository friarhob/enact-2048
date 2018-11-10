import React, { Component } from "react";
import "./Table.css";
import ArrowKeysReact from "arrow-keys-react";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: [
        [" ", " ", " ", " "],
        [" ", " ", " ", " "],
        [" ", " ", " ", " "],
        [" ", " ", " ", " "]
      ]
    };

    ArrowKeysReact.config({
      left: () => {
        this.setState((state, props) => ({
          cells: this.moveLeft(state.cells)
        }));
      },
      right: () => {
        this.setState((state, props) => ({
          cells: this.moveRight(state.cells)
        }));
      },
      up: () => {
        this.setState((state, props) => ({
          cells: this.moveUp(state.cells)
        }));
      },
      down: () => {
        this.setState((state, props) => ({
          cells: this.moveDown(state.cells)
        }));
      }
    });

    this.cellClass = this.cellClass.bind(this);
    this.rotateCounterClockwise = this.rotateCounterClockwise.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.moveDown = this.moveDown.bind(this);
    this.moveUp = this.moveUp.bind(this);
    this.addTile = this.addTile.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => ({
      cells: this.addTile(this.addTile(state.cells, 4), 2)
    }));
  }

  addTile(original, value) {
    var spaces = [];
    original.map((row, rowIndex) => {
      row.map((elem, colIndex) => {
        if (elem === " ") {
          spaces.push([rowIndex, colIndex]);
        }
      });
    });
    if (spaces.length === 0) {
      return original;
    }
    var pos = spaces[Math.floor(Math.random() * spaces.length)];
    var cells = JSON.parse(JSON.stringify(original));
    cells[pos[0]][pos[1]] = value ? value : Math.random() > 0.1 ? 2 : 4;
    return cells;
  }

  rotateCounterClockwise(original) {
    var cells = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        cells[4 - i - 1][j] = original[j][i];
      }
    }

    return cells;
  }

  moveRight(original) {
    return this.rotateCounterClockwise(
      this.rotateCounterClockwise(
        this.moveLeft(
          this.rotateCounterClockwise(this.rotateCounterClockwise(original))
        )
      )
    );
  }

  moveUp(original) {
    return this.rotateCounterClockwise(
      this.rotateCounterClockwise(
        this.rotateCounterClockwise(
          this.moveLeft(this.rotateCounterClockwise(original))
        )
      )
    );
  }

  moveDown(original) {
    return this.rotateCounterClockwise(
      this.moveLeft(
        this.rotateCounterClockwise(
          this.rotateCounterClockwise(this.rotateCounterClockwise(original))
        )
      )
    );
  }

  moveLeft(original) {
    var move = false;
    var cells = JSON.parse(JSON.stringify(original));
    for (var i = 0; i < 4; i++) {
      for (var j = 1; j < 4; j++) {
        if (cells[i][j] !== " ") {
          var k = j;
          while (cells[i][k - 1] === " ") {
            cells[i][k - 1] = cells[i][k];
            cells[i][k] = " ";
            k--;
            move = true;
          }
        }
      }
    }
    for (i = 0; i < 4; i++) {
      for (j = 1; j < 4; j++) {
        if (cells[i][j] !== " " && cells[i][j - 1] === cells[i][j]) {
          cells[i][j - 1] *= 2;
          cells[i][j] = " ";
          for (k = j + 1; k < 4; k++) {
            cells[i][k - 1] = cells[i][k];
            cells[i][k] = " ";
          }
          move = true;
        }
      }
    }

    if (move) {
      return this.addTile(cells);
    }
    return original;
  }

  cellClass(value) {
    return (
      "cell" +
      (value === " " ? "" : " tile-" + (value <= 2048 ? value : "super"))
    );
  }

  render() {
    return (
      <div {...ArrowKeysReact.events} tabIndex="0" className="Table">
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
