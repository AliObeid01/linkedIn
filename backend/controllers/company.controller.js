const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getCompany = async (req, res) => {
  const company = req.company;
  res.json(company);
}

const editProfileCompany = async (req, res) => {
  const {name,aboutus,address} = req.body
  await Company.findByIdAndUpdate(req.company._id, {name:name,about_us:aboutus,address:address});
  res.json({message: "Profile has been edited"});
}

module.exports = {
  getCompany,
  addJob,
  editProfileCompany,
  getCompanyJobs,
  getApplicants,
}
