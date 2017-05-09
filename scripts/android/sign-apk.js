const path = require('path');
const exec = require('./exec');

const BACKSPACE = String.fromCharCode(127);
function getPassword(prompt, callback) {
  if (prompt) {
    process.stdout.write(prompt);
  }

  var stdin = process.stdin;
  stdin.resume();
  stdin.setRawMode(true);
  stdin.resume();
  stdin.setEncoding('utf8');

  var password = '';
  stdin.on('data', function (ch) {
    ch = ch.toString('utf8');

    switch (ch) {
      case "\n":
      case "\r":
      case "\u0004":
      // They've finished typing their password
      process.stdout.write('\n');
      stdin.setRawMode(false);
      stdin.pause();
      callback(false, password);
      break;
      case "\u0003":
      // Ctrl-C
      callback(true);
      break;
      case BACKSPACE:
      password = password.slice(0, password.length - 1);
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(prompt);
      process.stdout.write(password.split('').map(function () {
        return '*';
      }).join(''));
      break;
      default:
      // More passsword characters
      process.stdout.write('*');
      password += ch;
      break;
    }
  });
}

module.exports = (keystorePath) => {
  return new Promise((resolve, reject) => {
    getPassword('Keystore password: ', (ctrlC, password) => {
      exec('apksigner', [
        'sign',
        '--ks', process.argv[2],
        '--out', path.resolve('./platforms/android/build/outputs/apk/android-release.apk'),
        path.resolve('./platforms/android/build/outputs/apk/android-release-unsigned-aligned.apk')
      ], [password])
      .then(resolve)
      .catch(reject);
    });
  })
}
