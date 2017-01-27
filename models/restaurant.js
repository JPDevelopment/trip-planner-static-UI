const Sequelize = require('sequelize');
const Place = require('./place');
const db = require('./index');

const Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.INTEGER
  }
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;
