import Property from './properties'
const Sequelize = require('sequelize');

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

db.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  });

  // Not finished. 
  // This line is defining our models. For now, we only have Property model
  // but we are not using it for now.
  db.define(Property)


export { db };
