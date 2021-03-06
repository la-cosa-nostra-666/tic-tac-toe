import '../css/header.scss';

import memory from './memory';

export default class Header {
  container = document.createElement('div');
  centerContainer = document.createElement('div');
  textContainer = document.createElement('span');
  stateContainer = document.createElement('span');
  height = 0;
  _state = '';
  constructor() {
    this.container.classList.add('header');
    this.centerContainer.classList.add('center');
    this.container.appendChild(this.centerContainer);
    this.textContainer.classList.add('text');
    this.stateContainer.classList.add('state');
    this.centerContainer.appendChild(this.textContainer);
    this.centerContainer.appendChild(this.stateContainer);
    this.textContainer.innerHTML = 'Player now:';
    this.state = memory.player;
    memory.on('player', () => {
      this.state = memory.player;
    });
  }
  set state(state) {
    this._state = state;
    let classMap = {
      'o': 'o',
      'x': 'x',
      '': 'empty'
    };
    this.stateContainer.classList.remove('o', 'x');
    this.stateContainer.classList.add(classMap[state]);
  }
  restyle() {
    this.container.style.height = `${this.height}px`;
    // this.textContainer.style.lineHeight = `${this.height}px`;
  }
}
