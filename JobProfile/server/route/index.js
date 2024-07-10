const router = require("express").Router();

router.use('/auth' , require('./auth'));
router.use('/company', require('./company'));
router.use('/job', require('./job'));
router.use('/application', require('./application'));
router.use('/notification', require('./notification'));
router.use('/notes' , require('./notes'));
router.use('/user', require('./user'))

module.exports = router;