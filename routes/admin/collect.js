var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('admin/collect/index', {})
});

router.get('/:id', function(req, res, next) {
    res.render('admin/collect/show', {})
});