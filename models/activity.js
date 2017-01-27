const Sequelize = require('sequelize');
const Place = require('./place');
const db = require('./index');

const Activity = db.define('activity', {
  name: {
    type: Sequelize.STRING
  },
  age_range: {
    type: Sequelize.STRING
  }
});

Activity.belongsTo(Place);

module.exports = Activity;
