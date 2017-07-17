"use strict";

var getRole = require("../helpers").getRole;

const requireAuthentication = require('./requireAuthentication');

module.exports =
    function (requiredRole) {
        return [
            requireAuthentication,
            function (req, res, next) {
                if (getRole(req.decoded.role) >= getRole(requiredRole)) return next();
                return res.status(401).json({error: true, message: 'Not enough privileges'});
            }];
    };