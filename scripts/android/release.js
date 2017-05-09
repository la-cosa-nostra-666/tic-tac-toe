const path = require('path');
const exec = require('./exec');

exec('rm', [
  '-r', path.resolve('./www')
])
