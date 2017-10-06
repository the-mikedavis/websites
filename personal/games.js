const express = require('express'),
    router = express.Router();

router.get('/', function (req, res) {
    res.render('games.html');
});

router.get('/pacman', function (req, res) {
    res.render('pacman.html')
});

router.get('/doodlejump', function (req, res) {
    res.render('doodlejump.html');
});

module.exports = router;
