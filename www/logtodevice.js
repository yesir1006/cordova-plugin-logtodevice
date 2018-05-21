var exec = require ('cordova/exec');

var logtodevice = {};
logtodevice.log = function (obj) {
  if (typeof (obj) !== 'string') {
    try {
      obj = JSON.stringify (obj);
    } catch (ex) {
      console.error (ex);
    }
  }
  exec (null, null, 'LogToDevice', 'log', [obj]);
};

module.exports = logtodevice;
