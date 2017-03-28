import EventEmitter from 'events';

class Memory extends EventEmitter {
  _player = window.localStorage.getItem('player') || 'o';
  _tiles = JSON.parse(window.localStorage.getItem('tiles')) ||  [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
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
  }
}
export default new Memory();
