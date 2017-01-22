'use strict';

const Mongo = require('poseidon-mongo');
const Driver = new Mongo.Driver();
const Database = Mongo.Database;

const config = require('../../config/mongo.json');
Driver.configure('dev', config.dev);
Driver.configure('test', config.test);

module.exports = function(c) {
  const cfg = c || process.env.NODE_ENV || 'dev';
  console.log(cfg);
  return new Database(Driver, cfg);
}
