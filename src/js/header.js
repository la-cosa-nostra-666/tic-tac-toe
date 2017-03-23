export default class Header {
  container = document.createElement('div');
  constructor() {
      console.log('new header!!!');
  }
  setCurrentPlayer(player) {
    console.log(`player now ${player}`);
  }
}
