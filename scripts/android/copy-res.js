var fse = require('fs-extra')

console.error('Copy res to android platform');

fse.copy('res', 'platforms/android/res', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log("success!");
  }
})
