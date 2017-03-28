import EventEmitter from 'events';

import '../css/board.scss';

import memory from './memory';
import Tile from './tile';

export default class Board extends EventEmitter {
  container = document.createElement('div');
  size = 0;
  board = [
    [new Tile(['without-left', 'without-top']), new Tile(['without-top']), new Tile(['without-top', 'without-right'])],
    [new Tile(['without-left']), new Tile(), new Tile(['without-right'])],
    [new Tile(['without-left', 'without-bottom']), new Tile(['without-bottom']), new Tile(['without-bottom', 'without-right'])]
  ];
  tiles = this.board.reduce((array, row) => array.concat(row), []);
  constructor() {
    super();
    this.container.classList.add('board');
    this.board.forEach((row) => {
      let rowElement = document.createElement('div');
      rowElement.classList.add('row');
      row.forEach((tile) => rowElement.appendChild(tile.container) );
      this.container.appendChild(rowElement);
    });
    memory.tiles.forEach((tileState, index) => this.tiles[index].state = tileState);
    this.tiles.forEach((tile, index) => {
      tile.on('click', () => {
        if (tile.state !== '') {
          return;
        }
        memory.updateTile(index);
        this.emit('changed');
      });
    });
    memory.on('tile', (state, index) => {
      this.tiles[index].state = state;
    });
  }
  restyle() {
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    this.tiles.forEach(tile => tile.restyle());
  }
}
