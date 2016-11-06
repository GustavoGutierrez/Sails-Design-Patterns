const requireAll = require('require-all');
const _ = require('lodash');

const BaseControllers = requireAll(  __dirname + '/../api/base/');
const Decorators = requireAll(  __dirname + '/../api/decorators/');
const Observers = requireAll(  __dirname + '/../api/observers/');

/**
 * This configuration of the application is responsible for overall load decorators, bases, observers etc.
 * To have them available in any part of the application site.
 * This loads before the controlladores to initialize.
 */
(function() {

  const has = Object.prototype.hasOwnProperty;

  // Load in global var
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

  // Load in globals methods and objects
  _.each(Observers, (func, key)=>{
    if(!has.call(global, key)){
      global[key] = func;
    }
  });

  _.each(Decorators, (func, key)=>{
    if(!has.call(global, key)){
      global[key] = func;
    }
  });

  _.each(BaseControllers, (func, key)=>{
    if(!has.call(global, key)){
      global[key] = func;
    }
  });


})();

