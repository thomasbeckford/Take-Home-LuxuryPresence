const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


// Here we need to create the model for Property with all their attributes
// using sequelize.DataTypes as we show below:

export const Property = sequelize.define('Property', {
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  zip: {
    type: DataTypes.NUMBER
  }
}, {
});


// console.log(Property === sequelize.models.Property);