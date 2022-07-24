const Blog = require("../models/blog");
const { successmessage, errormessage } = require("../middlewares/util");

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(successmessage("All Blogs returned", blog));
  } catch (error) {
    return res.status(400).json(errormessage(error.message));
  }
};
