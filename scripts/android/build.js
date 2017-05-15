const path = require('path');

const exec = require('../core/exec');
const prepare = require('./prepare');

const build = () => {
  return prepare()
  .then(() => exec('cordova', ['build', 'android']))
  .catch((error) => console.error(error));
}

if (require.main === module) {
  build();
}
else {
  module.exports = build;
}
