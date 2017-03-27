import '../css/app.scss';

import GameView from './gameView';
import WinnerView from './winnerView';

export default class App {
  container = document.createElement('div');
  gameView = new GameView();
  winnerView = new WinnerView();
  constructor() {
    this.container.classList.add('app');
    this.container.appendChild(this.gameView.container);
    this.container.appendChild(this.winnerView.container);
    this.gameView.on('gameEnd', (winner) => {
      this.gameView.hide();
      this.winnerView.show();
      this.winnerView.winner = winner;
    });
    this.winnerView.on('click', () => {
      this.gameView.show();
      this.winnerView.hide();
    });
  }
  restyle() {
    this.gameView.restyle();
    this.winnerView.restyle();
  }
}
