"use strict";

var userCanAccessUserData = require("../../helpers").userCanAccessUserData;

const SoftwareFramework = require('../../models/softwareFramework.schema');

/* SoftwareFrameworks page. */
exports.get = function (req, res, next) {
    //TODO : SoftwareFrameworks - Handle options
    SoftwareFramework
        .find({user: req.params[PARAM_ID_USER]})
        .limit(req.options.pagination.limit)
        .skip(req.options.pagination.skip)
        .exec(function (err, softwareFrameworks) {
            if (err) return next(new DatabaseFindError());
            res.json({data: softwareFrameworks});
        });
};

exports.post = function (req, res, next) {
    if (!userCanAccessUserData(req.decoded, req.params[PARAM_ID_USER])) {
        return next(new MissingPrivilegeError());
    }
    //TODO : SoftwareFrameworks - Create softwareFramework for user
    return next(new NotImplementedError("Create a new softwareFramework for user : " + req.params[PARAM_ID_USER]));
};

exports.put = function (req, res, next) {
    if (!userCanAccessUserData(req.decoded, req.params[PARAM_ID_USER])) {
        return next(new MissingPrivilegeError());
    }
    //TODO : SoftwareFrameworks - Add Bulk update for user
    return next(new NotImplementedError("Bulk update of softwareFrameworks for user : " + req.params[PARAM_ID_USER]));
};

exports.delete = function (req, res, next) {
    if (!userCanAccessUserData(req.decoded, req.params[PARAM_ID_USER])) {
        return next(new MissingPrivilegeError());
    }
    SoftwareFramework
        .remove({user: req.params[PARAM_ID_USER]})
        .exec(function (err, removed) {
            if (err) return next(new DatabaseRemoveError());
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};