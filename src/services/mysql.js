const user = require('../models/user.js');
const Sequelize = require('sequelize');

module.exports = function() {
  const app = this;

  const connectionString = app.get('db-connection-string');
  const sequelize = new Sequelize(connectionString, {
    dialect: 'mysql',
    logging: false,
    define: {
      freezeTableName: true
    }
  });

  app.set('sequelizeClient', sequelize);

  // set models
  app.configure(user);

  // set associations
  Object.keys(sequelize.models)
    .map(n => sequelize.models[n])
    .filter(m => m.associate !== undefined)
    .forEach(m => m.associate());

  // sync up to the database
  sequelize.sync();
};
