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

    var errors = [];
    var crawler = new Crawler({
        callback : function(err, body, jquery) {
            if(err) {
                errors.push({uri : this.uri, code : err.code});
                return;
            }
            if(body.uri === 'http://www.hobbyking.com/404.html') {
                errors.push({uri : this.uri, code : 404});
            }
			/* name */
			var name = jquery('#productDescription').text()

            /* ariane */
            var arianes = [];
            jquery('.defaultLineHeight a').each(function(i, ariane) {
                /* ariane */
                var arianeLink = jquery(ariane).text();
                arianes.push(arianeLink);
            });

            /* desc */
            var desc = jquery('#productDetails').html();


            /* tech */
            var tech = desc.match(/<strong>Specs:<br><\/strong>(([\s\S])*)(<strong>\w*:<br><\/strong>)?$/);
			var techs = tech[1].split('<br>');

            /* quality */
            for(var i = 0; i <= 5; i += 1) {
                var crowns = jquery('img[src="images/new11/' + i + 'crown.jpg"]');
                if(crowns.length == 1) {
                    var quality = i
                }
            }

            //
            /* pics */
            jquery('img.newprodbox').each(function(i, thumb) {
                var clickAction = jquery(thumb).attr('onclick');
                var imgUrl = clickAction.match(/src='(.*)'/)[1];
                var ext = imgUrl.split('.').reverse()[0];
                var filename = name.replace(/\W/g, '_') + i + '.' + ext;
                models.Part.downloadImage('http://www.hobbyking.com/hobbyking/store/' + imgUrl, filename)
            });

            /* price */
            var price = jquery('#price_lb').text()
        }
    });

    var collectorPromise = models.Collector.findById(req.params.id);
    collectorPromise.then(function(collecorTuple) {
        var collector = collecorTuple.dataValues;
        collector.urls.split(";").forEach(function(item) {
            crawler.queue("http://www.hobbyking.com/hobbyking/store/__17507__ImmersionRC_5_8Ghz_Audio_Video_Transmitter_FatShark_compatible_600mw_.html")
        });

    });


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