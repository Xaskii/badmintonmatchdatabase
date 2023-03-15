"use strict";
exports.__esModule = true;
var http = require('http');
var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var morgan = require('morgan');
require('express-async-errors');
var middleware = require('./utils/middleware');
var config = require('./utils/config');
var matchesRouter = require('./controllers/matches');
var usersRouter = require('./controllers/users');
var loginRouter = require('./controllers/login');
var app = express();
mongoose
    .connect(config.MONGODB_URI)
    .then(function () {
    console.log('connected to MongoDB');
})["catch"](function (error) {
    console.error('error connecting to MongoDB:', error.message);
});
app.use(cors());
app.use(express.json());
app.use(middleware.tokenExtractor);
app.use(morgan('combined'));
app.use('/api/matches', matchesRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
var server = http.createServer(app);
var PORT = config.PORT;
server.listen(PORT, function () {
    console.log("Server listening on port ".concat(PORT));
});
