const path = require('path');

const exec = require('../core/exec');

const prepare = () => {
  return exec('rm', ['-rf', path.resolve('./www')])
  .then(() => exec('rm', ['-rf', path.resolve('./res')]))
  .then(() => exec('webpack', ['-p']))
  .then(() => exec('cordova', ['prepare']))
}

if (require.main === module) {
  prepare();
}
else {
  module.exports = prepare;
}
