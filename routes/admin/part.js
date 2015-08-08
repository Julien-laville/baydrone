var express = require('express');
var router = express.Router();
var models  = require('../../models');

router.get('/', function(req, res, next) {
    models.Part.findAll().then(function(parts) {
        res.render('admin/part/index', {parts : parts});
    })
});

router.get('/new', function(req, res, next) {
    var partPromise = models.Part.create({name : 'sample part'});
    partPromise.then(function(collector) {
        res.render('admin/part/edit', collector.dataValues)
    });

});

router.post('/:id/update', function(req, res, next) {
    models.Part.update(req.body, {
        where : {
            id : req.params.id
        }
    }).then(function(part) {
        req.flash('info', 'Flash is back!');
        res.redirect('/admin/part');
    });
});

router.get('/:id/edit', function(req, res, next) {
    models.Part.findById(req.params.id).then(function(tuple) {
        if(!tuple) {
            res.render('admin/part/404')
        } else {
            res.render('admin/part/edit', tuple.dataValues);
        }
    });
});

module.exports = router;