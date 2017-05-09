const path = require('path');

const exec = require('./exec');
const copyRes = require('./copy-res');

const build = () => {
  return exec('rm', ['-rf', path.resolve('./www')])
  .then(() => exec('rm', ['-rf', path.resolve('./res')]))
  .then(() => exec('webpack', ['-p']))
  .then(() => exec('phonegap', ['prepare']))
  .then(() => copyRes())
  .then(() => exec('phonegap', ['build', 'android']))
}

if (require.main === module) {
  build();
}
else {
  module.exports = build;
}
