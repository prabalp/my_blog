const mongoose = require("mongoose");

const BlogScheme = new mongoose.SchemaType({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartScheme);
