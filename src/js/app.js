import '../css/index.scss';
import Header from './header';

export default {
  ready: () => {
    const header = new Header();
    document.body.appendChild(header.container);
    header.setCurrentPlayer('ali')
  }
}
