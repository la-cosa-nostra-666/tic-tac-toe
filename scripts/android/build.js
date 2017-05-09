const path = require('path');

const exec = require('./exec');
const prepare = require('./prepare');

const build = () => {
  return prepare()
  .then(() => exec('phonegap', ['build', 'android']))
}

if (require.main === module) {
  build();
}
else {
  module.exports = build;
}
