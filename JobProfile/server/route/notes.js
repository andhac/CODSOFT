import express from "express";
const router = express.Router();
const auth = require("../middlewares/auth")

router.get("/",auth, (req, res) => {
    console.log(req.userId);
    res.send("Notes");
});
module.exports = router;