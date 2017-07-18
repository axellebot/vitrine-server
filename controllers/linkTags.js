"use strict";

var getOptionRemove = require("../helpers").getOptionRemove;

const LinkTag = require('../models/linkTag.schema');

const PARAM_ID = global.constants.PARAM.PARAM_ID_LINK_TAG;

/* Links page. */
exports.linkTags = {};

exports.linkTags.get = function (req, res, next) {
    //TODO : LinkTags - Handle options
    LinkTag
        .find({})
        .limit(req.options.pagination.limit)
        .skip(req.options.pagination.skip)
        .exec(function (err, linkTags) {
            if (err) return next(err);
            res.json({data: linkTags});
        });
};
exports.linkTags.post = function (req, res, next) {
    //TODO : LinkTags - Create link
    res.status(404).send('Create a new LinkTag');
};
exports.linkTags.put = function (req, res, next) {
    //TODO : LinkTags - Add Bulk update
    res.status(404).send('Bulk update of links');
};
exports.linkTags.delete = function (req, res, next) {
    LinkTag
        .remove()
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};

/* LinkTag page. */
exports.linkTag = {};
exports.linkTag.get = function (req, res, next) {
    LinkTag
        .findById(req.params[PARAM_ID])
        .exec(function (err, linkTag) {
            if (err) return next(err);
            res.json({data: linkTag});
        });
};
exports.linkTag.post = function (req, res, next) {
    res.sendStatus(403);
};
exports.linkTag.put = function (req, res, next) {
    //TODO : LinkTag - Update link
    res.status(404).send('Update details of links');
};
exports.linkTag.delete = function (req, res, next) {
    var optionRemove = getOptionRemove(req.params[PARAM_ID], req.decoded);
    LinkTag
        .remove(optionRemove)
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};