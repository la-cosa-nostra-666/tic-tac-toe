import EventEmitter from 'events';

class Memory extends EventEmitter {
  _player = 'o';
  _tiles = [
    '', '', '',
    '', '', '',
    '', '', ''
  ];
  constructor() {
    super()
  }
  get tiles() {
    return this._tiles;
  }
  updateTile(index) {
    this._tiles[index] = this._player;
    this.emit('tile', this._player, index);
    this._player = this._player === 'o' ? 'x' : 'o';
    this.emit('player', this._player);
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
    this._player = 'o'
    this.emit('player', this._player);
  }
}
export default new Memory();
