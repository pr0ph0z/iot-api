const mongoose = require("mongoose");

const testModel = new mongoose.Schema(
  {
    value_a: {
      type: String
    },
    value_b: {
      type: String
    },
    value_c: {
      type: String
    }
  },
  {
    versionKey: false,
    collection: "test"
  }
);

module.exports = mongoose.model("test", testModel);
