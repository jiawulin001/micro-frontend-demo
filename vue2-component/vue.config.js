const path = require('path');

module.exports = {
    devServer: {
        port: 5050,
        publicPath: path.join(__dirname, 'lib'),
    }
  }