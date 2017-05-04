/**
 * Device.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
let uuid = require('node-uuid');

module.exports = {

  autoPK: false,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'devices',
  schema: true,

  attributes: {
    serial: {
      type: 'string',
      size: 36,
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function () { return uuid.v4(); }
    },

    token: {
      type: 'string',
      size: 8,
      unique: true,
      required: true,
      defaultsTo: function () { return uuid.v4().substring(8, 0); }
    },

    user: {
      model: 'user'
    },

    bike: {
      model: 'bike',
      unique: true
    }
  }
};

