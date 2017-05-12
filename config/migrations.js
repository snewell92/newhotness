const app = require('../src/app');
const env = process.env.NODE_ENV || 'development';

module.exports = {
  [env]: {
    url: app.get('db-connection-string'),
    dialect: 'mysql',
    migrationStorageTableName: '_migrations'
  }
};