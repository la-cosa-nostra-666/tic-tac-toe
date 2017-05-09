const spawn = require('child_process').spawn;

const exec = (command, opts, stdinData) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, opts, {
      stdio: [0, 1, 2, 'ipc']
    });
    child.on( 'close', (code) => {
      if (code === 0){
        resolve();
      }
      else {
        reject(code);
      }
    });
  });
}
module.exports = exec;
