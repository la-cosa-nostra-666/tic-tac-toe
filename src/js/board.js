import '../css/board.scss';

import Tile from './tile.js';

export default class Board {
  container = document.createElement('div');
  board = [
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()]
  ];
  constructor() {
    let size = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    this.container.classList.add('board');
    this.container.style.width = `${size}px`;
    this.container.style.height = `${size}px`;
    this.board.forEach((row) => {
      let rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((tile) => rowElement.appendChild(tile.container) );
      this.container.appendChild(rowElement);
    })
  }
}
