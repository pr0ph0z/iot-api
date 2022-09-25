const Test = require("../models/test");

function get() {
  return Test.find().sort({ _id: -1 });
}

module.exports = {
  get
};
