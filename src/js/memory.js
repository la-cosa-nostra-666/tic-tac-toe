import EventEmitter from 'events';

class Memory extends EventEmitter {
  _player = window.localStorage.getItem('player') || 'o';
  _tiles = JSON.parse(window.localStorage.getItem('tiles')) ||  [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  _history = JSON.parse(window.localStorage.getItem('history')) || [];
  constructor() {
    super();
  }
  get tiles() {
    return this._tiles;
  }
  updateTile(index) {
    this._tiles[index] = this._player;
    this.emit('tile', this._player, index);
    this._player = this._player === 'o' ? 'x' : 'o';
    this.emit('player', this._player);
    this._saveStates();
  }
  get player() {
    return this._player;
  }
  get history() {
    return this._history;
  }
  set history(result) {
    this._history.push(result);
    this.emit('history', this._history);
    this._saveStates();
  }
  cleanHistory() {
    this._history = [];
    this.emit('history', this._history);
    this._saveStates();
  }
  clean() {
    this._tiles = [
      '', '', '',
      '', '', '',
      '', '', ''
    ];
    this._tiles.forEach((state, index) => this.emit('tile', state, index));
    this._player = 'o';
    this.emit('player', this._player);
    this._saveStates();
  }
  _saveStates() {
    window.localStorage.setItem('player', this._player);
    window.localStorage.setItem('tiles', JSON.stringify(this._tiles));
    window.localStorage.setItem('history', JSON.stringify(this._history));
  }
}
export default new Memory();
