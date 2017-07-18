"use strict";

var getOptionRemove = require("../helpers").getOptionRemove;

const Interest = require('../models/interest.schema');

const PARAM_ID = global.constants.PARAM.PARAM_ID_INTEREST;

/* Interests page. */
exports.interests = {};
exports.interests.get = function (req, res, next) {
    //TODO : Interests - Handle options
    Interest
        .find({})
        .limit(req.options.pagination.limit)
        .skip(req.options.pagination.skip)
        .exec(function (err, interests) {
            if (err) return next(err);
            res.json({data: interests});
        });
};
exports.interests.post = function (req, res, next) {
    //TODO : Interests - Create interest
    res.status(404).send('Create a new Interest');
};
exports.interests.put = function (req, res, next) {
    //TODO : Interests - Add Bulk update
    res.status(404).send('Bulk update of interests');
};
exports.interests.delete = function (req, res, next) {
    Interest
        .remove()
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};

/* Interest page. */
exports.interest = {};
exports.interest.get = function (req, res, next) {
    Interest
        .findById(req.params[PARAM_ID])
        .exec(function (err, interest) {
            if (err) return next(err);
            res.json({data: interest});
        });
};
exports.interest.post = function (req, res, next) {
    res.sendStatus(403);
};
exports.interest.put = function (req, res, next) {
    //TODO : Interest - Update interest
    res.status(404).send('Update details of interests');
};
exports.interest.delete = function (req, res, next) {
    var optionRemove = getOptionRemove(req.params[PARAM_ID], req.decoded);
    Interest
        .remove(optionRemove)
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};