import '../css/tile.scss';
import EventEmitter from 'events';

export default class Tile extends EventEmitter {
  container = document.createElement('div');
  _state = '';
  constructor(additionalClassArray) {
    super();
    this.container.classList.add('tile');
    this.container.classList.add.apply(this.container.classList, additionalClassArray);
    this.container.addEventListener('click', () => this.emit('click'));
  }
  set state(state) {
    if (!(state === 'o' || state === 'x' || state === '')) {
      return; // console.error(`wrong state ${state}`);
    }
    let classMap = {
      'o': 'o',
      'x': 'x',
      '': 'empty'
    };
    this._state = state;
    this.container.classList.remove('o', 'x');
    this.container.classList.add(classMap[state]);
  }
  get state() {
    return this._state;
  }
  restyle() {
  }
}
