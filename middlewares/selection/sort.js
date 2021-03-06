"use strict";

// Errors
const CursorWrongSortError = require('@errors/CursorWrongSortError');

/**
 * @param req
 * @param res
 * @param next
 */
module.exports = async (req, res, next) => {
  // Sort
  const sortString = req.query.sort || "";

  if (typeof sortString !== "string") return next(new CursorWrongSortError("Sort cursor must be a string."));

  req.query.sort = sortString.replace(',', ' ');
  console.log("Sort : ", req.query.sort);

  next();
}