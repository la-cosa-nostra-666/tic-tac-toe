const path = require('path');

const exec = require('../core/exec');
const copyRes = require('./copy-res');

const prepare = () => {
  return exec('rm', ['-rf', path.resolve('./www')])
  .then(() => exec('rm', ['-rf', path.resolve('./res')]))
  .then(() => exec('webpack', ['-p']))
  .then(() => exec('cordova', ['prepare']))
  .then(() => copyRes())
}

if (require.main === module) {
  prepare();
}
else {
  module.exports = prepare;
}
