var express = require('express');
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    templates = require('./routes/templates'),
    schedules = require('./routes/schedules'),
    app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.get('/ping', (req, res) => {
   res.json({ ping: 'pong' });
});

app.use('/api/v1/templates', templates);
app.use('/api/v1/schedules', schedules);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
   var err = new Error('Not Found');
   err.status = 404;
   next(err);
});

// error handler
app.use(function(err, req, res, next) {
   // render the error page
   console.log(err);

   res.status(err.status || 500);
   res.json({ error: err, message: err.message });
});

module.exports = app;
