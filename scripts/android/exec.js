const spawn = require('child_process').spawn;

const exec = (command, opts, stdinData) => {
  return new Promise((resolve, reject) => {
    const child = spawn(command, opts);
    let errorBuffer = '';
    if (stdinData) {
      stdinData.forEach((line) => child.stdin.write(line));
      child.stdin.end();
    }
    child.stderr.on('data', (data) => errorBuffer = errorBuffer + data);
    child.stdout.pipe(process.stdout);
    child.on( 'close', (code) => {
      if (code === 0){
        resolve();
      }
      else {
        reject(new Error(errorBuffer));
      }
    });
  });
}
module.exports = exec;
