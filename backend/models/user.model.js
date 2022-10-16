const mongoose = require('mongoose');

const users = new mongoose.Schema({
  name: {
    type: String,
    required: 'Please enter your Name',
    trim: true
  },

  email: {
    type: String,
    required: 'Please enter an email',
    unique: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },

  password: {
    type: String,
    required: 'Please enter password',
    select: false,
    trim: true,
  },

  job_title: {
    type: String,
    trim: true
  },

  Bio: {
    type: String,
    trim:true
  },

  dob: { 
    type: String,
  },

  profile_pic: {
    type: String
  },

  experience: {
    type: String
  },

  following:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
  }],

  type: {
    type: String
  },
})

const User = mongoose.model('User', users);

module.exports = User;
