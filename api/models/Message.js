/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    receiver        : { model: 'user' },
    sender          : { model: 'user' },
    subject         : { type: 'string' },
    message         : { type: 'text' },
    read            : { type: 'integer' },
    inReplyTo       : { model: 'message' }
  }
};

