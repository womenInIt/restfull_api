var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const expressOasGenerator = require('express-oas-generator');

var indexRouter = require('./routes/ideas');
var usersRouter = require('./routes/weather');

var app = express();
expressOasGenerator.handleResponses(app, {});
expressOasGenerator.handleRequests();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.sendStatus(err.status || 500);
});

module.exports = app;
