const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
module.exports = router;

router.get('/', function(req, res, next) {
    var outerScopeContainer = {};
    Hotel.findAll()
        .then(function (dbHotels) {
        outerScopeContainer.dbHotels = dbHotels;
        return Restaurant.findAll();
      })
      .then(function (dbRestaurants) {
        outerScopeContainer.dbRestaurants = dbRestaurants;
        return Activity.findAll();
      })
      .then(function (dbActivities) {
        // res.json(outerScopeContainer);
        res.render('home', {
          templateHotels: outerScopeContainer.dbHotels,
          templateRestaurants: outerScopeContainer.dbRestaurants,
          templateActivities: dbActivities
        });
    })
  .catch(next);
});
