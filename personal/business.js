const express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('bs.html');
});

module.exports = router;