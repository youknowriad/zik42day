//Vendor
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Q = require('q');

// Config
var config            = require('./config/config');

// Mongo
var  TrackModel    = require('./model/track')(mongoose);

// Repositories
var TrackRepository = require('./repository/track-repository');
var trackRepository = new TrackRepository(Q, TrackModel);

// Middlewares
var middlewares = {
    bodyParser: bodyParser
};

// Controllers
var TrackController = require('./controller/track-controller');
var controllers = {
    trackController: new TrackController(trackRepository)
};

// Server
var Server = require('./server');
var server = new Server(express, mongoose, middlewares, controllers, config);

module.exports = {
    server: server
};
