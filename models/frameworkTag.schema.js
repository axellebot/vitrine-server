"use strict";

var mongoose = require('../mongoose');
var Schema = mongoose.Schema;

const uuid = require("../helpers").uuid;

var FrameworkTagSchema = new Schema({
    _id: {type: String, default: uuid()},
    label: {type: String, default:"", required: true},
    icon: {type: String, default: null},
    user: {type: String, default: null, required: true, ref: MODEL_NAME_USER}
}, {
    timestamps: true
});

module.exports = mongoose.model(MODEL_NAME_FRAMEWORK_TAG, FrameworkTagSchema,COLLECTION_NAME_FRAMEWORK_TAG);