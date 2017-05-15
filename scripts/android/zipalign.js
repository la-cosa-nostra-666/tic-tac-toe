const path = require('path');

const exec = require('../core/exec');

module.exports = () => {
  const alignedAPKPath = path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned-aligned.apk');
  return exec('rm', ['-rf', alignedAPKPath])
  .then(() =>
    exec('zipalign', [
      '-v',
      '-p', '4',
      path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned.apk'),
      alignedAPKPath
    ])
  )
}
