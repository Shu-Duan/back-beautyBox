import Sequelize from 'sequelize';
import config from '../config/config';
import fs from 'fs';
import path from 'path';

const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
  operatorsAliases: false,
  host: config.db.host,
   port: config.db.port,
  dialect: config.db.dialect,
  logging: function(msg) {
    console.log(msg);
  },
  pool: {
    max: 3,
    min: 0,
    idle: 10000
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/
    ],
    name: 'query',
    backoffBase: 100,
    backoffExponent: 1.1,
    timeout: 60000,
    max: Infinity
  }
});

/** Test connection */
sequelize.authenticate().then(function() {
  console.log('ok');
}).catch(function(err) {
  console.log(err);
});

var db = {};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  }).forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    console.log('Imported ' + model.name);
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

export default db;