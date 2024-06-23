const router = require("express").Router();

router.use("/signUp", require("./signUp"));
router.use("/login", require("./login"));

module.exports = router;