/**
 * app hook
 */
const _ = require('lodash');

module.exports = function(sails) {
  const has = Object.prototype.hasOwnProperty;

  function loadInGlobal() {

  }

  return {
    // Run when sails loads-- be sure and call `next()`.
    initialize: function(next){
      //loadInGlobal();
      return next();
    }
  };
};
