const fse = require('fs-extra');

module.exports = () => {
  return new Promise((resolve, reject) => {
    fse.copy('res', 'platforms/android/res', (error) => {
      if (error) {
        return reject(error);
      }
      return resolve();
    })
  })
}
