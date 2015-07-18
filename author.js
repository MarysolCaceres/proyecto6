/**
 * Created by Marysol on 13/07/2015.
 */
var express = require('express');
var router = express.Router();

/* GET  page Author. */
router.get('/', function(req, res, next) {
    res.render('author', { title: 'Autor' });
});

module.exports = router;