const Sequelize = require('sequelize');

module.exports = function() {

  const app = this;
  let sqlClient = app.get('sequelizeClient');

  let tableColumns = {
    username: { 
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
    }
  };

  let options = {
    freezeTableName: true,
    tableName: 'users'
  };

  return sqlClient.define('users', tableColumns, options);
};
