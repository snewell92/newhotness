const feathers = require('feathers');
const expressVue = require('express-vue');
const _ = require('lodash');
const auth = require('feathers-authentication');

// define routes and their Vue model
//  Routes are objects path, name
//  The path is the relative url in the browser
//  The name is the angular component name (if omitted; name === path)
// By default all routes are restricted based on login.

// ORDER OF ROUTES MATTERS
// Make the most general routes LAST
// Express will find the FIRST matching route to show
//  to the user
let routes = [
  { path: 'main' },
  { path: 'donuts', name: 'donut' }
];

let routeData = {};

module.exports = function () {
  const app = this;

  app.engine('vue', expressVue);
  app.set('view engine', 'vue');
  app.set('views', 'public');

  app.set('vue', { defaultLayout: 'layout' });

  // TODO change this
  let pageTitle = 'Tennesse Events';

  let sharedVueScope = {
    data: {
      title: pageTitle
    },
    vue: {
      head: {
        title: pageTitle,
        meta: [
          { style: '/styles.css', type: 'text/css' }
        ]
      }
    }
  };

  // Functions to build route
  let ensureName = r => {
    r.name = r.name || r.path;
    return r;
  };

  let ensurePageData = r => {
    if (!routeData[r.name]) {
      let pageVueScope = _.cloneDeep(sharedVueScope);
      pageVueScope.data.currentPage = r.name;
      routeData[r.name] = pageVueScope;
    }

    return r;
  };

  // pull cookie into header...? Not sure if doing this alright..
  app.use((req, res, next) => {
    if(!req.cookies) {
      next();
      return;
    }

    let cookieVal = req.cookies[app.get('authentication').cookie.name];
    if(cookieVal) {
      req.headers.authorization = cookieVal;
    }

    next();
  });

  let buildRoute = r => {
    app.use(
      '/' + r.path,
      auth.express.authenticate('jwt'),
      (req, res) => {
        res.render('main', routeData[r.name]);
      }
    );
  };

  // Actually build the routes!
  routes
    .map(ensureName)
    .map(ensurePageData)
    .forEach(buildRoute);

  // add login route per docs
  app.post(
    '/login',
    auth.express.authenticate(
      'local', 
      { successRedirect: '/donuts', failureRedirect: '/' }
    )
  );

  // takes care of static assets, including index.html (login page)
  app.use('/', feathers.static(app.get('public')));

  return app;
};
