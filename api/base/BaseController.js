/**
 * BaseController
 */
module.exports = {
  find:function(req, res){
     console.log("Run BaseController method: ",__function, ' Line: ', __line);
    return res.ok({success:"Ok find extended"});
  }
};
