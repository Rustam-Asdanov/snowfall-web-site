const express = require("express");
const router = express.Router();

const { getPage } = require("../controller/main_page_controller");

router.route("/").get(getPage);

// module.exports = router;
