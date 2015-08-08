var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res, next) {
    res.render('craft/index', { title: 'crafts' });
});

router.get('/new', function(req, res, next) {
    models.Craft.create({name : 'New rig'}).then(function(tuple) {
        var model = {rigTypes : ['racer', 'beginner', 'heavyLift'], rig : tuple.dataValues};
        res.render('craft/edit', model);
    })
});

router.get('/edit', function(req,res, next) {
    models.Craft.findById(req.params.id).then(function(tuple) {
        var model = {rigTypes : ['Racer', 'Beginner', 'Heavy Lift'], rig : tuple.dataValues};
        res.render('craft/edit', model)
    })
});

module.exports = router;