const decorator = require('es5-decorator');
/**
 * Decorator
 * https://es.wikipedia.org/wiki/Decorator_(patr%C3%B3n_de_dise%C3%B1o)
 */
module.exports = function ControllerDecorator(controller) {
  //1. Decorating
  function beforeFind() {
    console.log("\nRun method: ",__function, ' Line: ', __line);
  }

  //2.  Concrete Decorator
  function findDecorator(target, key, descriptor){
    var fn = target[key];
    //2.1 Override Method of controller
    target[key] = function(){
      //2.1.2  Method decorating
      beforeFind(arguments[0], arguments[1]);
      //2.1.3  Run method of controller
      return fn.apply(target, arguments);
    }
    // 2.2 Return method override
    return target[key];
  }

  //3.  Decorator Method
  decorator(findDecorator, controller, 'find');
}
