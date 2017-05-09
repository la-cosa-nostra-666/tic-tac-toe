var fse = require('fs-extra')

module.exports = () => {
  fse.copy('res', 'platforms/android/res', function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  })
}
