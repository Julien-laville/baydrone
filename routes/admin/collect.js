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

router.get('/:id/start', function(req, res, next) {


    var crawler = new Crawler({
        callback : function(err, body, jquery) {
            var arianes = [];
            jquery('.defaultLineHeight a').each(function(i, ariane) {
                /* ariane */
                var arianeLink = jquery(ariane).text();
                arianes.push(arianeLink);
                /* desc */

                /* tech */

                /* quality */

                /* pics */
                //http://stackoverflow.com/questions/12740659/downloading-images-with-node-js
            });

        }
    });

    var collectorPromise = models.Collector.findById(req.params.id);
    collectorPromise.then(function(collecorTuple) {
        var collector = collecorTuple.dataValues;
        collector.urls.split(";").forEach(function(item) {
            crawler.queue(item)
        });

    });

    //crawler.queue('http://www.hobbyking.com/hobbyking/store/__78045__Basher_RZ_4_1_10_Rally_Racer_ARR_UK_Warehouse_.html')
});

router.get('/new', function(req, res, next) {
    var collectorPromise = models.Collector.create({site : 'sample site'});
    collectorPromise.then(function(collector) {
        res.render('admin/collect/edit', collector.dataValues)
    });

});

router.get('/:id/edit', function(req, res, next) {
    var collectorPromise = models.Collector.findById(req.params.id);
    collectorPromise.then(function(collector) {
        res.render('admin/collect/edit', collector.dataValues)
    });
});

router.post('/:id/update', function(req, res) {
    var collectorPromise = models.Collector.update({site : req.body.site, urls : req.body.urls}, {where:{id : req.params.id}});
    collectorPromise.then(function(collector) {
        res.json(collector);
    })
});

router.get('/:id/status', function (req, res) {


});

router.get('/:id/delete/', function(req, res) {
    models.Collectors.destroy({where : {id : req.param.id}}, function(nb){
        res.json({deleted : nb})
    });

});

router.get('/:id', function(req, res, next) {
    models.Collector.findById(req.params.id, function(collector) {
        res.json(collector);
    });
});



module.exports = router;