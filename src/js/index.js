import '../css/index.scss';

import 'es6-shim';
import App from './app';

document.addEventListener('deviceready', () => {
  const app = new App();
  document.body.appendChild(app.container);
  app.restyle();
  window.addEventListener('resize', () => app.restyle());
}, false);
