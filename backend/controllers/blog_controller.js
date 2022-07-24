const Blog = require("../models/blog");
const { successmessage, errormessage } = require("../middlewares/util");

module.exports.getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    return res.status(200).json(successmessage("All Blogs returned", blogs));
  } catch (error) {
    return res.status(400).json(errormessage(error.message));
  }
};

module.exports.addBlog = async (req, res) => {
  try {
    if (req.body["title"] === "demo") {
      return res.status(200).json(successmessage("No Blog Created"));
    }
    const blog = await Blog.create(req.body);
    return res.status(200).json(successmessage("New Blog Created", blog));
  } catch (error) {
    return res.status(400).json(errormessage(error.message));
  }
};
