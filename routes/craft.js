var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res, next) {
    res.render('craft/index', { title: 'crafts' });
});

router.get('/new', function(req, res, next) {
    res.render('craft/new', { title: 'new craft', selectors : models.Selector.findAll()});
});

module.exports = router;