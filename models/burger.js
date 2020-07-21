var orm = require("../config/orm.js");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (values, cb) {
    orm.create("burgers", ["burger_name", "devoured"], [values, false], cb);
  },
  update: function(id, cb) {
      var condition = "id=" + id;
      orm.update("burgers", {devoured: true}, condition, cb);
  }
};

module.exports = burgers
