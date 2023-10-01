var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('encuentra tus destacados ok');
});

module.exports = router;