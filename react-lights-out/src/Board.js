import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const [board, setBoard] = useState(createBoard());

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let initialBoard = [];
    let row = Array.from({ length: nrows });
    let col = Array.from({ length: ncols });
    // TODO: create array-of-arrays of true/false values
    initialBoard = col.map(colArr => {
      return row.map(cell => {
        return Math.random() >= chanceLightStartsOn;
      });
    });


    return initialBoard;
  }

  function hasWon() {
    // TODO: check the board in state to determine whether the player has won.
    let check = board.map(arr => {
      return arr.includes(true);
    });
    return !check.includes(true)
  };

  function flipCellsAround(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        // if this coord is actually on board, flip it

        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };


      // TODO: Make a (deep) copy of the oldBoard
      let copy = [...oldBoard]
      // TODO: in the copy, flip this cell and the cells around it
      flipCell(y, x, copy) //center 
      flipCell(y + 1, x, copy) //top 
      flipCell(y, x + 1, copy) //right 
      flipCell(y - 1, x, copy) //bottom 
      flipCell(y, x - 1, copy) //left 
      // TODO: return the copy
      return copy;
    });
  }

  // if the game is won, just show a winning msg & render nothing else
  if (hasWon()) {
    return <div>You Win!</div>
  }
  // TODO

  // make table board
  let currTable = board.map((arr, y) => {
    let rows = arr.map((light, x) => {
      let coord = `${y}-${x}`
      return <Cell flipCellsAroundMe={() => flipCellsAround(coord)} isLit={light} key={coord} />
    })

    return <tr key={y}>{rows}</tr>
  })
  return <table>{currTable}</table>
  // TODO
}

Board.defaultProps = {
  nrows: 4,
  ncols: 4,
  chanceLightStartsOn: .5
}

export default Board;
