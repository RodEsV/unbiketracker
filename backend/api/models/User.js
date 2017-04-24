/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  autoPK: false,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  tableName: 'tracker',
  schema: true,

  attributes: {
    id: {
      type: 'string',
      size: 36,
      primaryKey: true,
      unique: true,
      required: true,
      defaultsTo: function() { return uuid.v4(); }
    },
    firstName:{
      type: 'string',
      size: 50,
      required: true
    },
    lastName: {
      type: 'string',
      size: 50,
      required: true
    },
    document: {
      type: 'string',
      size: 50,
      required: true
    },
    picture: {
      type: 'string',
      size: 50,
      required: false
    },
    email: {
      type: 'string',
      size: 100,
      unique: true,
      required: true
    },
    phone: {
      type: 'string',
      size: 50,
      required: true
    },
    address: {
      type: 'string',
      size: 50,
      required: true
    },
    username: {
      type: 'string',
      size: 50,
      unique: true,
      required: true
    },
    password: {
      type: 'string',
      size: 255,
      minLenght: 8,
      required: true
    }
  }
};

