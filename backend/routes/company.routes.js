const {Router} = require('express');
const {getCompany,addJob,editProfileCompany,getCompanyJobs,getApplicants} = require('../controllers/company.controller');
const companyMiddleware = require('../middlewares/company.middleware');
const router = Router();

router.get('/company-profile', companyMiddleware, getCompany);
router.post('/add-job', companyMiddleware, addJob);
router.post('/edit-profile', companyMiddleware, editProfileCompany);
router.get('/company-jobs', companyMiddleware, getCompanyJobs);
router.get('/applicants', companyMiddleware, getApplicants);

module.exports = router;
