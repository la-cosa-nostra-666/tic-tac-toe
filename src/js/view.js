import EventEmitter from 'events';

export default class View extends EventEmitter {
  toggle(force) {
    this.container.classList.toggle('hidden', force);
    if (force == false) {
      this.restyle();
    }
  }
  hide() {
    this.toggle(true);
  }
  show() {
    this.toggle(false);
  }
  restyle() {

  }
}
