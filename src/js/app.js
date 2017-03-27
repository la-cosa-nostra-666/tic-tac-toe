import '../css/app.scss';
import Header from './header';
import Board from './board';

export default class App {
  container = document.createElement('div');
  board = new Board();
  header = new Header();
  constructor() {
    this.container.classList.add('app');
    this.container.appendChild(this.header.container);
    this.container.appendChild(this.board.container);
  }
  restyle() {
    this.board.size = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    if (Math.abs(this.board.size - window.innerHeight) / 2 < 60) {
      this.board.size = this.board.size - 120;
    }
    this.board.restyle();
    const topSpace = this.board.container.getBoundingClientRect().top;
    this.header.height = topSpace;
    this.header.restyle();
  }
}
