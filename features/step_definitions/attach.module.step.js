// Generated by CoffeeScript 1.8.0
(function() {
  var myStepDefinitionsWrapper;

  myStepDefinitionsWrapper = function() {
    var result, util;
    util = {};
    result = {};
    this.Given(/^The App\.namespace method$/, function(callback) {
      util = require('../../src/attach.module.coffee');
      if (util === void 0) {
        callback.fail(new Error("Require did not work"));
      }
      if (typeof util.namespace !== 'function') {
        callback.fail(new Error('function namespace is not defined'));
      }
      callback();
      return null;
    });
    this.When(/^A developer calls App\.namespace with "([^"]*)"$/, function(arg1, callback) {
      if (typeof arg1 !== "string") {
        callback.fail((function() {
          throw new Error("The argument arg1 is not of type string");
        })());
      }
      result = util.namespace(arg1);
      callback();
      return null;
    });
    this.Then(/^He should get an object App\.modules\.module1$/, function(callback) {
      if (typeof result !== 'object') {
        callback.fail((function() {
          throw new Error("App is no object. It is of type: " + typeof result);
        })());
      }
      callback();
      return null;
    });
    return null;
  };

  module.exports = myStepDefinitionsWrapper;

}).call(this);

//# sourceMappingURL=attach.module.step.js.map
