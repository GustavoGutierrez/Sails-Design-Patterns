//https://addyosmani.com/resources/essentialjsdesignpatterns/book/

var Controller = {
    find:function(req, res){
      return res.ok({success:"Ok"});
    }
};

/**
 * Objetos base extendibles
 */
var BaseController = {
  find:function(req, res){
    console.log('find Base');
    return res.ok({success:"Ok find Decorator"});
  }
};

var CustomController = {
  findOne:function(req, res) {
    return res.ok({success:"Ok findOne"});
  }
};

/**
 * Extends use assign
 */
var AwsPricingController =  Object.assign(Controller, BaseController, CustomController);


/**
 * Decorator
 * https://es.wikipedia.org/wiki/Decorator_(patr%C3%B3n_de_dise%C3%B1o)
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty
 */

Object.defineProperty(AwsPricingController, 'find', {
  value: function(req, res) {
    return res.ok({success:"Find desde Decorator"});
  },
  enumerable:true
});


Object.defineProperty(AwsPricingController, 'destroy', {
  value: function(req, res) {
    return res.ok({success:"Destroy desde Decorator"});
  },
  enumerable:true
});


console.log('AwsPricingController', AwsPricingController);

module.exports = AwsPricingController;
