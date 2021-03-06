require('dotenv').config()
const cors = require('cors')
var express = require('express');
var path = require('path');
const mongoose = require('mongoose')
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

mongoose.connection.openUri(process.env.MONGODB_CONN_STRING)
mongoose.Promise = global.Promise

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    maxAge: 60 * 60 * 60 * 24,
  })
)

app.use('/api', require('./routes/index'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message : err.message
  });
});

module.exports = app;
