var express = require('express');
var router = express.Router();
var models  = require('../../models');




router.get('/', function(req, res, next) {
    models.Part.findAll().then(function(parts) {
        res.render('admin/part/index', {parts : parts});
    })
});

router.get('/:id', function(req, res, next) {
    models.Part.findById(req.params.id).then(function(parts) {
        if (err) throw err;

        res.render('admin/part/show', {parts : parts});
    });
});


module.exports = router;