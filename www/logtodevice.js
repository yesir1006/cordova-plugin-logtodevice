var exec = require ('cordova/exec');

var _p = 'LogToDevice';
var _pf = 'log';

var logtodevice = {};

var toString = function (obj, extend) {
  // add logic to extend obj later
  var s = '';
  try {
    s = JSON.stringify (obj);
  } catch (e) {
    console.error (e);
  }
  return s;
};

logtodevice.log = function (obj, extend) {
  if (typeof (extend) === 'undefined' || extend == null) {
  	extend = false;
  }
  if (typeof (obj) !== 'string') {
    obj = toString (obj, extend);
  }
  exec (null, null, _p, _pf, [obj]);
};

logtodevice.override = function (c) {
  var oc = function () {};
  if (typeof (c.log) === 'function') {
  	oc = c.log;
  }
  c.log = function () {
    var a = [];
    for (var i = 0, l = arguments.length; i < l; i++) {
      a.push (toString (arguments [i]));
    }
    exec (null, null, _p, _pf, [a.join (' ')]);
    oc.apply (null, a);
  };
};

module.exports = logtodevice;
