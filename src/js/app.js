import '../css/index.scss';
import Header from './header';
import Board from './board';

export default class App {
  board = new Board();
  constructor() {
    document.body.appendChild(this.board.container);
  }
  restyle() {
    this.board.restyle();
  }
}
