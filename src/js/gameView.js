import View from './view';
import Header from './header';
import Board from './board';
import History from './history';
import memory from './memory';

export default class GameView extends View {
  container = document.createElement('div');
  board = new Board();
  header = new Header();
  history = new History();
  constructor() {
    super();
    this.container.classList.add('game-view');
    this.container.appendChild(this.header.container);
    this.container.appendChild(this.board.container);
    this.container.appendChild(this.history.container);
    this.board.on('changed', () => {
      const winner = this.checkWinner();
      if (winner) {
        memory.clean();
        memory.history = winner;
        this.emit('gameEnd', winner);
      }
    });
    this.board.emit('changed');
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
             t[2] && t[4] && t[6];    // diagonal two
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
    let size = window.innerHeight > window.innerWidth ? window.innerWidth : window.innerHeight;
    size = size - 40; // margin
    if (Math.abs(size - window.innerHeight) / 2 < 60) {
      size = size - 120;
    }
    this.board.size = size;
    this.board.restyle();
    const topSpace = this.board.container.getBoundingClientRect().top;
    this.header.height = topSpace;
    this.header.restyle();
    this.history.height = topSpace;
  }

}
