var express = require('express');
var router = express.Router();
var models = require('../../models');
var Promise = require("bluebird");

/* GET users listing. */
router.get('/', function(req, res, next) {
    var  userCountPromise = models.User.count();
    var partCountPromise = models.Part.count();
    Promise.join(userCountPromise, partCountPromise, function(userCount, partCount) {
        res.render('admin/index', { userCount : userCount, partCount : partCount });
    });

});

module.exports = router;