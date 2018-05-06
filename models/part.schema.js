"use strict";

// Constants
const messages = require('../constants/messages');
const statuses = require('../constants/statuses');
const models = require('../constants/models');
const collections = require('../constants/collections');

var mongoose = require('../mongoose');
var Schema = mongoose.Schema;

var PartSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    default: "",
    required: true
  },
  profile: {
    type: Schema.Types.ObjectId,
    default: null,
    required: true,
    ref: models.MODEL_NAME_PROFILE
  },
  groups: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: models.MODEL_NAME_GROUP
    }],
    default: []
  },
  user: {
    type: String,
    default: null,
    required: true,
    ref: models.MODEL_NAME_USER
  }
}, {
  timestamps: true
});

module.exports = mongoose.model(models.MODEL_NAME_PART, PartSchema, collections.COLLECTION_NAME_PART);