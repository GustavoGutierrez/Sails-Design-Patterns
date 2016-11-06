//  Required
//const Base = require('../base/');
//const ControllerDecorator = require('../decorators/ControllerDecorator');
var Controller = Object.assign(

  {
    find:(req, res)=>{
      return res.ok({success:"Ok"});
    }
  },

 /**
  * EXTENDS
  * Extend the functionality of the controller
  */
  BaseController,
  CustomController
);

/**
 *  DECORATORS
 *  Add decorators to the controller
 */
ControllerDecorator(Controller);

/**
 *  EXPORT MODULE
 *  Export extended controller module and decorated
 */
module.exports = Controller;
