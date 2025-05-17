const { createJob, getAllJobs, getJobById, deleteJob } = require( '../controler/jobController');

const express = require('express');

const router = express.Router();

router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJobById);
router.post('/jobs', createJob);
router.delete('/jobs/:id', deleteJob);

module.exports = router;
