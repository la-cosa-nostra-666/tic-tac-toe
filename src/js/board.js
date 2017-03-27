import '../css/board.scss';

import Tile from './tile.js';

export default class Board {
  container = document.createElement('div');
  size = 0;
  board = [
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()],
    [new Tile(), new Tile(), new Tile()]
  ];
  tiles = this.board.reduce((array, row) => array.concat(row), []);
  constructor() {
    this.container.classList.add('board');
    this.board.forEach((row) => {
      let rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((tile) => rowElement.appendChild(tile.container) );
      this.container.appendChild(rowElement);
    })
    this.tiles.forEach((tile) => {
      tile.on('click', () => {
        tile.state = tile.state == '' ? 'o' : tile.state == 'o' ? 'x' : '';
      })
    })
  }
  restyle() {
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    this.tiles.forEach(tile => tile.restyle())
  }
}
