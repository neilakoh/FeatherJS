const mongoose = require('mongoose');
const mongooseService = require('feathers-mongoose');
const Model = require('./user-model');
const bcrypt = require('bcrypt');
const sha256 = require('sha256');
const feathers = require('feathers');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');

module.exports = {
  save: function(message) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/login');
    const app = feathers().configure(rest()).use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));
    let hash = bcrypt.hashSync(sha256(message.data.password), bcrypt.genSaltSync(10));
    app.use('user', mongooseService({
      Model: Model,
      lean: true
    }));

    app.service('user').create({
      username: message.data.username,
      password: hash,
      email: message.data.email
    }).then(function(message) {
      console.log('New User was added');
      mongoose.connection.close();
    });
  },

  update: function(message) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/login');
    const app = feathers().configure(rest()).use(bodyParser.json()).use(bodyParser.urlencoded({extended: true}));
    let hash = bcrypt.hashSync(sha256(message.data.password), bcrypt.genSaltSync(10));
    app.use('user', mongooseService({
      Model: Model,
      lean: true,
    }));

    app.service('user').update(message.params.query, {
      $set: {username: 'test'}
    }).then(function(message) {
      console.log('User has been updated');
      mongoose.connection.close();
    });
  }
}
