const mongoose = require('mongoose');

const companies = new mongoose.Schema({
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

  profile_pic: {
    type: String
  },

  about_us: {
    type: String,
    trim: true
  },

  address: {
    type: String,
    trim:true
  },

  followers: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },

  jobs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  },

  type: {
    type: String
  },

})

const Company = mongoose.model('Company', companies);

module.exports = Company;
