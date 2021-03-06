"use strict";

// Config
const config = require('@config');
const mongoose = require("mongoose");

// Setup promises
mongoose.Promise = global.Promise;

// Connect
mongoose.connect(config.database.uri, {
  user: config.database.username,
  pass: config.database.password,
  autoReconnect: true,
  useNewUrlParser: true, // Newer url parser
  reconnectTries: 10, // Never stop trying to reconnect
  reconnectInterval: 500,
  poolSize: config.database.poolSize, // Maintain up to [X] socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}).then(
  () => {
    console.log("database opened on :", config.database.uri);
  }, (error) => {
    console.error("database error on :", config.database.uri, error);
  });

module.exports = mongoose;