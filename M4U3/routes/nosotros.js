var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Encuentra información sobre nosotros ok');
});

module.exports = router;