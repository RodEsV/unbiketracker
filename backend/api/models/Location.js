/**
 * Tracker.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: true,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'location',
  schema: true,

  attributes: {
    id: {
      type: 'string',
      size: 50,
      primaryKey: true,
      required: true
    },
    deviceID: {
      type: 'string',
      unique: true,
      size: 100,
      required: true
    },
    latitude: {
      type: 'string',
      size:100,
      required: true
    },
    longitude: {
      type: 'string',
      size:100,
      required: true
    }
  }
};

