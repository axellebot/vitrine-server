"use strict";

var getOptionRemove = require("../helpers").getOptionRemove;

const Project = require('../models/project.schema');

const PARAM_ID = global.constants.PARAM.PARAM_ID_PROJECT;

/* Projects page. */
exports.projects = {};
exports.projects.get = function (req, res, next) {
    //TODO : Projects - Handle options
    Project
        .find({})
        .limit(req.options.pagination.limit)
        .skip(req.options.pagination.skip)
        .exec(function (err, projects) {
            if (err) return next(err);
            res.json({data: projects});
        });
};
exports.projects.post = function (req, res, next) {
    //TODO : Projects - Create project
    res.status(404).send('Create a new Project');
};
exports.projects.put = function (req, res, next) {
    //TODO : Projects - Add Bulk update
    res.status(404).send('Bulk update of projects');
};
exports.projects.delete = function (req, res, next) {
    Project
        .remove()
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};

/* Project page. */
exports.project = {};
exports.project.get = function (req, res, next) {
    Project
        .findById(req.params[PARAM_ID])
        .exec(function (err, project) {
            if (err) return next(err);
            res.json({data: project});
        });
};
exports.project.post = function (req, res, next) {
    res.sendStatus(403);
};
exports.project.put = function (req, res, next) {
    //TODO : Project - Update project
    res.status(404).send('Update details of project');
};
exports.project.delete = function (req, res, next) {
    var optionRemove = getOptionRemove(req.params[PARAM_ID], req.decoded);
    Project
        .remove(optionRemove)
        .exec(function (err, removed) {
            if (err) return next(err);
            return res.status(200).json({error: false, message: `${JSON.parse(removed).n} deleted`});
        });
};