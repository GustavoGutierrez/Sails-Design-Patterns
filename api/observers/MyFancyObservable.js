var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {
  EventEmitter.call(this);

  this.hello = function(name) {
    this.emit('hello', "Hello "+name);
  }
}

util.inherits(MyFancyObservable, EventEmitter);

module.exports = MyFancyObservable;
