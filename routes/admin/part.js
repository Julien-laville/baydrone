var express = require('express');
var router = express.Router();
var models  = require('../../models');
models.Tag.belongsToMany(models.Part, {through : 'tag_user', foreignKey : 'tagId'});
models.Part.belongsToMany(models.Tag, {through : 'tag_user', foreignKey : 'partId'});

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
        req.flash('info', 'Flash is back!');
        res.redirect('/admin/part');
    });
});

router.get('/:id', function(req, res, next) {
    models.Part.findById(req.params.id).then(function(tuple) {
        if(!tuple) {
            res.render('admin/part/404')
        } else {
            res.render('admin/part/show', {part : tuple.dataValues.part});
        }
    });
});

module.exports = router;