const path = require('path');

const exec = require('../core/exec');

module.exports = (keystorePath) => {
  return exec('apksigner', [
    'sign',
    '--ks', process.argv[2],
    '--out', path.resolve('./platforms/android/build/outputs/apk/android-release.apk'),
    path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned-aligned.apk')
  ]);
}
