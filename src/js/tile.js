import '../css/tile.scss'
import EventEmitter from 'events';

export default class Tile extends EventEmitter {
  container = document.createElement('div');
  stateContainer = document.createElement('div');
  _state = '';
  constructor(additionalClassArray) {
    super()
    this.container.classList.add('tile');
    this.container.classList.add.apply(this.container.classList, additionalClassArray);
    this.container.appendChild(this.stateContainer);
    this.stateContainer.classList.add('state');
    this.container.addEventListener('click', () => this.emit('click'));
  }
  set state(state) {
    if (!(state === 'o' || state === 'x' || state === '')) {
      return console.error(`wrong state ${state}`);
    }
    let classMap = {
      'o': 'fa-circle-o',
      'x': 'fa-times',
      '': 'empty'
    }
    this._state = state;
    this.stateContainer.classList.remove('fa-circle-o', 'fa-times');
    this.stateContainer.classList.add('fa', classMap[state]);
  }
  get state() {
    return this._state;
  }
  restyle() {
    this.stateContainer.style.fontSize = `${this.container.offsetHeight}px`;
  }
}
