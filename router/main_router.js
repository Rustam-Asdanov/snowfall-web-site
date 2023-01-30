const express = require("express");
const router = express.Router();

const { getPage, getAboutPage } = require("../controller/main_page_controller");

router.route("/").get(getPage);
router.route("/about").get(getAboutPage);

module.exports = router;
