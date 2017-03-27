import '../css/header.scss';

export default class Header {
  container = document.createElement('div');
  textContainer = document.createElement('span');
  stateContainer = document.createElement('span');
  height = 0;
  _state = '';
  constructor() {
    this.container.classList.add('header');
    this.textContainer.classList.add('text');
    this.stateContainer.classList.add('state');
    this.container.appendChild(this.textContainer);
    this.container.appendChild(this.stateContainer);
    this.textContainer.innerHTML = 'Player now:';
    this.state = 'o';
  }
  set state(state) {
    this._state = state;
    let classMap = {
      'o': 'fa-circle-o',
      'x': 'fa-times',
      '': 'empty'
    }
    this.stateContainer.classList.remove('fa-circle-o', 'fa-times');
    this.stateContainer.classList.add('fa', classMap[state]);
    console.log(`player now ${state}`);
  }
  restyle() {
    this.container.style.height = `${this.height}px`;
    this.textContainer.style.lineHeight = `${this.height}px`;
  }
}
