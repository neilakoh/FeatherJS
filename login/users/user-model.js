const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
  role: {
    type: String,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  creatdAt: {
    type: Date,
    required: false
  },
  updatedAt: {
    type: Date,
    required: false
  },
  isDeleted: {
    type: Boolean,
    required: false
  },
  deletedAt: {
    type: Date,
    required: false
  }
});
const Model = mongoose.model('Users', MessageSchema);

module.exports = Model;
