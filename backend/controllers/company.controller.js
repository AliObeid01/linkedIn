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

const getCompanyJobs = async (req, res) => {
  const company_jobs = await Company.find(req.company._id).populate("jobs");
  res.json(company_jobs);
}

const getApplicants= async (req, res) => {
  const  applicants= await Company.findById(req.company._id).populate([{ path: 'jobs', populate: { path: 'applicants' }}]);
  res.json(applicants);
}

module.exports = {
  getCompany,
  addJob,
  editProfileCompany,
  getCompanyJobs,
  getApplicants,
}
