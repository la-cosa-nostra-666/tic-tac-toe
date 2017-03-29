import '../css/history.scss';

import memory from './memory';
import Hammer from 'hammerjs';

export default class History {
  container = document.createElement('div');
  trash = document.createElement('div');
  list = document.createElement('div');
  horizontalContainer = document.createElement('div');
  _left = 0;
  _deltaX = 0;
  constructor() {
    this.container.classList.add('history');
    this.trash.classList.add('trash');
    this.container.appendChild(this.trash);
    this.list.classList.add('list');
    this.container.appendChild(this.list);
    this.horizontalContainer.classList.add('horizontal-container');
    this.list.appendChild(this.horizontalContainer);
    this.setupListHammer();
    this.trash.addEventListener('click', () => {
      memory.cleanHistory();
    });
    memory.history.forEach((result) => this._addMatchResult(result));
    memory.on('history', (history) => {
      if (history.length === 0) {
        return Array.from(this.horizontalContainer.children).forEach((child) => child.remove());
      }
      let resultsToAdd = history.slice(this.horizontalContainer.children.length);
      resultsToAdd.forEach((result) => this._addMatchResult(result));
    });
  }
  _addMatchResult(result) {
    let matchResultElement = document.createElement('div');
    matchResultElement.classList.add(result);
    this.horizontalContainer.insertBefore(matchResultElement, this.horizontalContainer.children[0]);
    this.restyle();
  }
  setupListHammer() {
    const listHammer = new Hammer(this.list);
    listHammer.on('panstart', () => {
      this._left = parseInt(this.horizontalContainer.style.left) || 0;
    });
    listHammer.on('panmove', (event) => {
      this._deltaX = event.deltaX;
      const move = this._left + this._deltaX;
      this.horizontalContainer.style.left = `${move > 0 ? 0 : move}px`;
    });
    listHammer.on('panend', () => {
      const move = this._left + this._deltaX;
      this._left = move > 0 ? 0 : move;
      this.horizontalContainer.style.left = `${this._left}px`;
    });
  }
  _height = 0;
  set height(height) {
    this._height = height;
    this.restyle();
  }
  restyle() {
    this.container.style.height = `${this._height}px`;
  }
}
