const router = require("express").Router();
const { getBlogs, addBlog } = require("../controllers/blog_controller");

router.route("/getblogs").get(getBlogs);
router.route("/addblog").post(addBlog);

module.exports = router;
