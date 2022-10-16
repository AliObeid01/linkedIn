const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getCompany = async (req, res) => {
  const company = req.company;
  res.json(company);
}

module.exports = {
  getCompany,
  addJob,
  editProfileCompany,
  getCompanyJobs,
  getApplicants,
}
