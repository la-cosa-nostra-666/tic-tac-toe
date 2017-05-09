var fse = require('fs-extra')

module.exports = () => {
  return new Promise((resolve, reject) => {
    fse.copy('res', 'platforms/android/res', function (error) {
      if (error) {
        return reject(error);
      }
      return resolve();
    })
  })
}
