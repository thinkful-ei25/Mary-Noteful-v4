'use strict'
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//fullName string
//username string required unique
//password string required

const userSchema = new mongoose.Schema({
    fullName: String,
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

userSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, result) => {
      delete result._id;
      delete result.__v;
      delete result.password;
    }
  });

  userSchema.methods.validatePassword = function (userSubmittedPassword) {
    const user = this; 
   return bcrypt.compare(userSubmittedPassword, this.password);
  };

  userSchema.statics.hashPassword = function (incomingPassword) {
    const digest = bcrypt.hash(incomingPassword, 10);
    return digest;
  };
  
  const userModel = mongoose.model('User', userSchema)
  module.exports = userModel;