const mongoose = require('mongoose');

const jobs = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter title',
    trim: true
  },

  job_description: {
    type: String,
    required: 'Please enter job description',
    trim: true
  },

  applicants: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  
  timestamp: {
    type: Date, 
    default: Date.now
  }
})

const Job = mongoose.model('Job', jobs);

module.exports = Job;
