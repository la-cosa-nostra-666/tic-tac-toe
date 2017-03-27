import EventEmitter from 'events';

export default class View extends EventEmitter {
  toggle(force) {
    this.container.classList.toggle('hidden', force);
  }
  hide() {
    this.toggle(true);
  }
  show() {
    this.toggle(false);
  }
}
