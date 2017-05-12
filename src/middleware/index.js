const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');

module.exports = function () {
  const app = this;

  // TODO handler has an option to pass an object to it
  //  with an html function. look into customizing
  //  errors with Dorian swagger

  // Always add notFound / handler last
  app.use(notFound());
  app.use(handler()); 
};
