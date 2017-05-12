const mysql = require('./mysql');
const users = require('./users/users.service.js');
const authentication = require('./authentication');

module.exports = function () {
  const app = this;

  app.configure(authentication);
  app.configure(mysql);
  app.configure(users);

  app.get('sequelizeClient').sync();
};
