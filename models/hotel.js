const Sequelize = require('sequelize');
const Place = require('./place');
const db = require('./index');

const Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER
  },
  amenities: {
    type: Sequelize.STRING
  }
});

Hotel.belongsTo(Place);

module.exports = Hotel;
