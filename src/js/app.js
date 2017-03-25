import '../css/index.scss';
import Header from './header';
import Tile from './tile';

export default {
  ready: () => {
    const header = new Header();
    document.body.appendChild(header.container);
    const tile = new Tile(['without-bottom']);
    document.body.appendChild(tile.container);
    tile.on('click', () => {
      tile.setPlayer('x');
    })
    header.setCurrentPlayer('ali')
  }
}
