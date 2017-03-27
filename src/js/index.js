import App from './app';

document.addEventListener("deviceready", () => {
  const app = new App();
  app.restyle();
  window.addEventListener('resize', () => app.restyle());
}, false);
