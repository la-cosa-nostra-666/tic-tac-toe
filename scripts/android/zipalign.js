const path = require('path');
const exec = require('./exec');

module.exports = () => {
  return exec('zipalign', [
    '-v',
    '-p', '4',
    path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned.apk'),
    path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned-aligned.apk')
  ]);
}
