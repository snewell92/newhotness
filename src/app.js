// set bluebird as the promise implementation. It's (much) faster and feature rich
global.Promise = require('bluebird');

const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const routes = require('./routes');

// instantiate the feathers app.
const app = feathers();

// set up the app - configuration
app.configure(configuration(path.join(__dirname, '..')))
    .use(cors())
    .use(helmet()) // best security practices
    .use(compress())
    .use(favicon(path.join(app.get('public'), 'favicon.ico'))) // match favicon first. Most important. :D
    .configure(rest())
    .configure(socketio())
    .configure(hooks())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .configure(services) // pull in all services from services\index.js
    .configure(routes)
    .configure(middleware) // middleware last (as per normal ExpressJS rules) from middleware\index.js
    .hooks(appHooks);

// return the app
module.exports = app;
