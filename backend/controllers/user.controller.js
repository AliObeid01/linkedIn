const User = require("../models/user.model");
const Company = require("../models/company.model");
const Job = require("../models/job.model");

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user);
}

const getCompanies = async (req, res) => {
  const companies = await Company.find().lean();
  res.json({data: companies})
}

const getFollowedCompanies = async (req, res) => {
  const followed_companies = await User.findById(req.user._id).populate("following");
  res.json({data: followed_companies});
}

const editProfile = async (req, res) => {
  const {name,job,bio,dob,experience} = req.body
  await User.findByIdAndUpdate(req.user._id, {name:name,job_title:job,Bio:bio,dob:dob,experience:experience});
  res.json({message: "Profile has been edited"});
}

const followCompany= async (req, res) => {
  const company_id = req.body.company_id;
  await User.findByIdAndUpdate(req.user._id, {$push: {following: company_id}});
  await Company.findByIdAndUpdate(company_id , {$push: {followers: req.user._id}});
  res.json({message: "Company has been followed"});
}

const applyJob= async (req, res) => {
  const job_id = req.body.job_id;
  await Job.findByIdAndUpdate(job_id, {$push: {applicants: req.user._id}});
  res.json({message: "Apply success"});
}
const getJobs = async (req, res) => {
  const jobs = await Job.find().lean();
  res.json({data: jobs})
}

const getfollowedJobs = async (req, res) => {
  const  followed_jobs= await User.findById(req.user._id).populate([{ path: 'following', populate: { path: 'jobs' }}]);
  res.json({data: followed_jobs});
}


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
