const path = require('path');
const build = require('./build');
const exec = require('./exec');
const zipalign = require('./zipalign');
const signAPK = require('./sign-apk');

if (!process.argv[2]) {
  console.log('set key path');
  return process.exit(0);
}

build()
.then(() => zipalign())
.then(() => signAPK(process.argv[2]))
