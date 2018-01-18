var express = require('express');
var router = express.Router();


router.use('/tweets', require('./tweet'))
router.use('/auth', require('./auth'))

module.exports = router;
