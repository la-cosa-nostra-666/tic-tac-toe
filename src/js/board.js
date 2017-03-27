import '../css/board.scss';
import memory from './memory'

import Tile from './tile';

export function chunk(array, chunkSize) {
  const chunks = [];
  for (var index = 0; index < array.size; index += chunkSize) {
    chunks.push(array.slice(index, index + chunkSize));
  }
  return chunks;
}
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
    this.tiles.forEach((tile, index) => {
      tile.on('click', () => {
        if (tile.state !== '') {
          return;
        }
        tile.state = memory.player;
        memory.updateTile(index)
      })
    })
    memory.tiles.forEach((tileState, index) => this.tiles[index].state = tileState);
  }
  restyle() {
    this.container.style.width = `${this.size}px`;
    this.container.style.height = `${this.size}px`;
    this.tiles.forEach(tile => tile.restyle())
  }
}
