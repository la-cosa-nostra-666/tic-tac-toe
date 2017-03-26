import '../css/index.scss';
import Header from './header';
import Board from './board';

export default {
  ready: () => {
    const header = new Header();
    document.body.appendChild(header.container);
    const board = new Board();
    document.body.appendChild(board.container);
    header.setCurrentPlayer('ali')
  }
}
