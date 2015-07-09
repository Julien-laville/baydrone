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
    var userPromise = models.User.create(req);
    userPromise.then(function(user) {
        console.log(user);
        req.flash('info', 'Welcome new user');
        res.redirect('/');
    });

});

module.exports = router;
