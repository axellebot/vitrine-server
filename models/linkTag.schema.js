"use strict";

var mongoose = require('../mongoose');
var Schema = mongoose.Schema;

const uuid = require("../helpers").uuid;

var LinkTagSchema = new Schema({
    _id: {type: String, default: uuid()},
    label: {type: String, default: "", required: true},
    icon: {type: String, default: null},
    user: {type: String, default: null, required: true, ref: MODEL_NAME_USER}
}, {
    timestamps: true
});

module.exports = mongoose.model(MODEL_NAME_LINK_TAG, LinkTagSchema, COLLECTION_NAME_LINK_TAG);