// Initializes the `users` service on path `/users`
const hooks = require('./users.hooks');
const filters = require('./users.filters');
const sqlService = require('feathers-sequelize');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const Model = app.get('sequelizeClient').models['users'];

  const options = {
    Model,
    name: 'users',
    paginate
  };

  app.use('/users', sqlService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');
  
  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
