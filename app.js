var express = require('express');
var path = require('path');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var models = require('./models');

var config = require('./config/application')();

var routes = require('./routes/index');
var users = require('./routes/users');
var craft = require('./routes/craft');

var admin = require('./routes/admin/index');
var part = require('./routes/admin/part');

var app = express();
i18n = require("i18n");
app.use(i18n.init);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(flash());

// view engine setup
var engine = require('express-dot-engine');
app.engine('dot', engine.__express);
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'dot');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-compass')({mode: 'expanded'}));
app.use(express.static(path.join(__dirname, 'public')));

engine.helper.isLogged = models.User.isLogged;

app.use('/', routes);
app.use('/craft', craft);
app.use('/users', users);
app.use('/admin', admin);
app.use('/admin/part', part);
app.use('/admin/collect', part);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
