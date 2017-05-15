const webpack = require('webpack');

const exec = require('./exec');
const config = require('../../webpack.config.js');

let server;
function startServer() {
  if (server) {
    return;
  }
  server = exec('phonegap', ['serve']);
}

const compiler = webpack(config)
compiler.watch({}, function(err, stats) {
    const log = stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true
    });
    console.log(log);
    startServer();
});
