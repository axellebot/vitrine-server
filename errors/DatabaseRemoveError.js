"use strict";

const messages = require('@constants/messages');
const statuses = require('@constants/statuses');

module.exports = class DatabaseRemoveError extends require('@errors/AppError') {
  constructor(message, status) {
    message = message || messages.MESSAGE_ERROR_DATABASE_REMOVE;
    status = status || statuses.HTTP_STATUS_INTERNAL_SERVER_ERROR;
    super(message, status);
  }
};