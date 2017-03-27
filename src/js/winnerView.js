import '../css/winner-view.scss';

import View from './view';

export default class WinnerView extends View {
  container = document.createElement('div');
  textContainer = document.createElement('div');
  winnerContainer = document.createElement('div');
  _winner = 'no-one';
  constructor() {
    super();
    this.container.classList.add('winner-view', 'hidden');
    this.container.appendChild(this.textContainer);
    this.textContainer.classList.add('text');
    this.textContainer.innerHTML = 'Winner is:';
    this.container.appendChild(this.winnerContainer);
    this.winnerContainer.classList.add('winner');
    this.container.addEventListener('click', () => this.emit('click'));
  }
  set winner(winner) {
    this.container.classList.remove(this._winner);
    this.container.classList.add(winner);
    this._winner = winner;
  }
  restyle() {
    let heightSpace = window.innerHeight - this.winnerContainer.getBoundingClientRect().top;
    let size = heightSpace > window.innerWidth ? window.innerWidth : heightSpace;
    this.winnerContainer.style.height = `${size}px`;
    this.winnerContainer.style.width = `${size}px`;
  }
}
