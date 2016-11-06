var util = require('util');
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {
  EventEmitter.call(this);
}


MyFancyObservable.prototype.hello = function (name) {
  this.emit('hello', name);
};

util.inherits(MyFancyObservable, EventEmitter);


module.exports = MyFancyObservable;
