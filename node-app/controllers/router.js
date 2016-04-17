/**
 * This is a router module as a middleware. Just like the containers, but
 * containers are functions that add routes to the app object.
 * This module, extends the routing as a mini-app and not adding the functionality to the app object.
 */

// Todo: How do I pass service objects to this middleware, like logger object and sphere client object.
var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// define the about route
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;