import EventEmitter from 'events';

class Memory extends EventEmitter {
  _player = 'o';
  _tiles = [
    '', '', '',
    '', 'o', '',
    '', '', ''
  ];
  get tiles() {
    return this._tiles;
  }
  updateTile(index) {
    this._tiles[index] = this._player;
    this.emit('player', this._player);
    this._player = this._player === 'o' ? 'x' : 'o';
  }
  get player() {
    return this._player;
  }
}
export default new Memory();
