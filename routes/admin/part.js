var express = require('express');
var router = express.Router();
var models  = require('../../models');




router.get('/', function(req, res, next) {
    models.Part.findAll().then(function(parts) {
        res.render('admin/part/index', {parts : parts});
    })
});

router.get('/new', function(req, res, next) {
    res.render('admin/part/new');
});

router.post('/create', function(req, res, next) {
    models.Part.create(req.body).then(function(part) {
        req.flash('info', 'Flash is back!')
        res.redirect('/admin/part')
    });
});

router.get('/:id', function(req, res, next) {
    models.Part.findById(req.params.id).then(function(part) {
        res.render('admin/part/show', {part : part.dataValues});
    });
});



module.exports = router;