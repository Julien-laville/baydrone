var express = require('express');
var router = express.Router();

var Crawler = require("crawler");
var Url = require('url');

router.get('/', function(req, res, next) {
    res.render('admin/collect/index', {site :  'example'})
});

router.get('/:id', function(req, res, next) {
    res.render('admin/collect/show', {})
});

router.get(':id/start', function(req, res, next) {
    var crawler = new Crawler({
        callback : function(err, res, jquery) {
            jquery('.defaultLineHeight').each(function(i, ariane) {
                console.log(ariane);
            })
        }
    });
    crawler.queue('http://www.hobbyking.com/hobbyking/store/__78045__Basher_RZ_4_1_10_Rally_Racer_ARR_UK_Warehouse_.html')
});