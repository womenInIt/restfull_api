const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const expressOasGenerator = require('express-oas-generator');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const indexRouter = require('./routes/ideas');
const weatherRouter = require('./routes/weather');

var app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/weather', weatherRouter);

// expressOasGenerator.handleResponses(app, {});
// expressOasGenerator.handleRequests();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.message = err;
  res.sendStatus(err.status || 500);
});

module.exports = app;
