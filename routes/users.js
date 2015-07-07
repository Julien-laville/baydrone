var express = require('express');
var router = express.Router();
var models = require('../models/index')

router.get('/login', function(req, res, next) {
    res.render('users/login');
});

router.get('/register', function(req, res, next) {
    res.render('users/login');
});

router.get('/create', function(req, res, next) {
    models.User.create(req);
    req.flash('info', 'Welcome new user');
    res.redirect('/');
});

module.exports = router;
