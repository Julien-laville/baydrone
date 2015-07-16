var express = require('express');
var router = express.Router();
var models = require('../../models');


var Crawler = require("crawler");
var Url = require('url');

router.get('/', function(req, res, next) {
    models.Collector.findAll().then(function(collectors) {
        res.render('admin/collect/index', {collectors : collectors})
    });
});

router.get('/1/start', function(req, res, next) {


    var crawler = new Crawler({
        callback : function(err, body, jquery) {
            var arianes = [];
            jquery('.defaultLineHeight a').each(function(i, ariane) {
                var arianeLink = jquery(ariane).text();
                arianes.push(arianeLink);
            });
            res.json(arianes);
        }
    });
    crawler.queue('http://www.hobbyking.com/hobbyking/store/__78045__Basher_RZ_4_1_10_Rally_Racer_ARR_UK_Warehouse_.html')
});

router.get('/new', function(req, res, next) {
    res.render('admin/collect/new', {})
});

router.get('/:id', function(req, res, next) {
    models.Collector.findById(req.params.id, function(collector) {
        res.json(collector);
    });
});



module.exports = router;