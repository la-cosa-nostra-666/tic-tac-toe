import '../css/tile.scss'
import EventEmitter from 'events';

export default class Tile extends EventEmitter {
  container = document.createElement('div');
  playerContainer = document.createElement('div');
  constructor(additionalClassArray) {
    super()
    this.container.classList.add('tile');
    this.container.classList.add.apply(this.container.classList, additionalClassArray);
    this.container.appendChild(this.playerContainer)
    this.playerContainer.classList.add('player')
    this.container.addEventListener('click', () => this.emit('click'));
  }
  setPlayer(player) {
    if (!(player === 'o' || player === 'x')) {
      return console.error(`wrong player ${player}`);
    }
    let classMap = {
      'o': 'fa-circle-o',
      'x': 'fa-times'
    }
    this.playerContainer.classList.remove('fa-circle-o', 'fa-times');
    this.playerContainer.classList.add('fa', classMap[player]);
  }
}
