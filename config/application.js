const Base = require('../api/base/');
const Decorators = require('../api/decorators/');
const _ = require('lodash');
const has = Object.prototype.hasOwnProperty;

module.exports = {
  appName: 'Desing Patterns with SailsJS'
};

Object.defineProperty(global, '__stack', {
  get: function() {
    var orig = Error.prepareStackTrace;

    Error.prepareStackTrace = function(_, stack) {
      return stack;
    };

    var err = new Error;

    Error.captureStackTrace(err, arguments.callee);

    var stack = err.stack;

    Error.prepareStackTrace = orig;

    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function() {
    return __stack[1].getLineNumber();
  }
});

Object.defineProperty(global, '__function', {
  get: function() {
    return __stack[1].getFunctionName();
  }
});


function loadInGlobal() {
  console.log("Run method: ",__function, ' Line: ', __line);
  _.each(Decorators, (func, key)=>{
    if(!has.call(global, key)){
      global[key] = func;
    }
  });

  _.each(Base, (func, key)=>{
    if(!has.call(global, key)){
      global[key] = func;
    }
  });
}

loadInGlobal();
