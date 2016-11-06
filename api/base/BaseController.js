/**
 * BaseController
 */
module.exports = {
  find:function(req, res){
    var observable = new MyFancyObservable();

    observable.on('hello', function (name) {
      console.log("Run BaseController method: ",__function, ' Line: ', __line);
      console.log('Observer event response:', name);

      return res.ok({success:"Ok find extended", name});
    });

    observable.hello('Gustavo');
  }
};
