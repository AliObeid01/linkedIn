const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");



module.exports = {
  getUser,
  followCompany,
  getCompanies,
  editProfile,
  getFollowedCompanies,
  applyJob,
  getJobs,
  getfollowedJobs,
  getUnfollowedCompany,
}
