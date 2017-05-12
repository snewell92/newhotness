const Sequelize = require('sequelize');
const app = require('./src/app');

let models = app.get('models');
let sequelize = app.get('sequelize');

module.exports = Object.assign(
    { Sequelize, sequelize },
    models);
