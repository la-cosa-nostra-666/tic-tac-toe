import '../css/app.scss';
import Header from './header';
import Board from './board';
import memory from './memory';

export default class App {
  container = document.createElement('div');
  board = new Board();
  header = new Header();
  constructor() {
    this.container.classList.add('app');
    this.container.appendChild(this.header.container);
    this.container.appendChild(this.board.container);
    this.board.on('changed', () => {
      const winner = this.checkWinner();
      if (winner) {
        console.log(winner);
        let clickOnce = (event) => {
          event.stopPropagation();
        }
        this.container.addEventListener('click', clickOnce)
        setTimeout(() => {
          memory.clean();
          this.container.removeEventListener('click', clickOnce);
        }, 5000)
      }
    })
  }
  checkWinner() {
    const states = this.board.tiles.map((tile) => tile.state);
    function winner(player, states) {
      let t = states.map((state) => state === player);
      return t[0] && t[1] && t[2] || // row one
             t[3] && t[4] && t[5] || // row two
             t[6] && t[7] && t[8] || // row three

             t[0] && t[3] && t[6] || // column one
             t[1] && t[4] && t[7] || // column two
             t[2] && t[5] && t[8] || // column three

             t[0] && t[4] && t[8] || // diagonal one
             t[2] && t[4] && t[6]    // diagonal two
    }
    function filled(states) {
      return states.every((state) => state !== '');
    }
    if (winner('o', states)) {
      return 'o';
    }
    if (winner('x', states)) {
      return 'x';
    }
    if (filled(states)) {
      return 'draw';
    }
  }
  restyle() {
    this.board.size = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    this.board.size = this.board.size - 40; // margin
    if (Math.abs(this.board.size - window.innerHeight) / 2 < 60) {
      this.board.size = this.board.size - 120;
    }
    this.board.restyle();
    const topSpace = this.board.container.getBoundingClientRect().top;
    this.header.height = topSpace;
    this.header.restyle();
  }
}
