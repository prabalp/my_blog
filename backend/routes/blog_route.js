const router = require("express").Router();
const { getBlogs } = require("../controllers/blog_controller");

router.route("/getblogs").get(getBlogs);

module.exports = router;
