const {Router} = require('express');
const {getUser,followCompany,getCompanies,editProfile,getFollowedCompanies,applyJob,getJobs,getfollowedJobs,getUnfollowedCompany} = require('../controllers/user.controller');
const authUserMiddleware = require('../middlewares/user.middleware');
const router = Router();

router.get('/user-profile', authUserMiddleware, getUser);
router.get('/companies', authUserMiddleware, getCompanies);
router.get('/followed-companies', authUserMiddleware, getFollowedCompanies);
router.post('/follow-company', authUserMiddleware, followCompany);
router.post('/edit-profile', authUserMiddleware, editProfile);
router.post('/apply-job', authUserMiddleware, applyJob);
router.get('/jobs', authUserMiddleware, getJobs);
router.get('/followed-jobs', authUserMiddleware, getfollowedJobs);
router.get('/unfollowed-company', authUserMiddleware, getUnfollowedCompany);

module.exports = router;
