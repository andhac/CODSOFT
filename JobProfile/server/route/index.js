const router = require("express").Router();

router.use('/auth' , require('./auth'));
router.use('/company', require('./company'));
router.use('/job', require('./job'));
router.use('/notes' , require('./notes'));

module.exports = router;