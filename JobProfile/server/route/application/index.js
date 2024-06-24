import express from "express";
import {ApplicationModel, JobModel} from "../../Database/allModel";

const router = express.Router();
const {auth, employerOnly} = require('../../middlewares/auth');

/**
 * @Route POST /
 * @Desc Create a new application
 * @Access Private
 */

router.post('/:jobId', auth, async (req, res) => {
    try {
        const {coverLetter, resume} = req.body;
        const {jobId} = req.params;
        const applicantId = req.userId;

        //Check if the job exists
        const job = await JobModel.findById(jobId);
        if (!job) {
            return res.status(400).json({message: "Job does not exist"});
        }

        //Check if the application already exists
        const checkApplication = await ApplicationModel.findOne({jobId: jobId, applicantId: applicantId});
        if (checkApplication) {
            return res.status(400).json({message: "Application already exists"});
        }

        const application = await ApplicationModel.create({
            jobId: jobId,
            applicantId: applicantId,
            coverLetter: coverLetter,
            resume: resume
        });
        res.status(200).json({application: application});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})
/**
 * @Route GET /
 * @Desc Get all applications based on jobId
 * @Access Private (Employer Only)
 */
router.get('/:jobId', auth, employerOnly, async (req, res) => {
    try {
        const {jobId} = req.params;
        const job = await JobModel.findById(jobId);
        if (!job) {
            return res.status(400).json({message: "Job does not exist"});
        }
        const applications = await ApplicationModel.find({jobId: jobId});
        res.status(200).json(applications);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
    * @Route Put /:applicationId/view
    * @Desc Update the status of the application to viewed
    * @Access Private (Employer Only)
 */
router.put('/:applicationId/view', auth, employerOnly, async (req, res) => {
    try {
        const {applicationId} = req.params;
        const application = await ApplicationModel.findByIdAndUpdate(applicationId, {status: 'viewed'}, {new: true});
        res.status(200).json(application);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/*
    * @Route Put /:applicationId/shortlist
    * @Desc Update the status of the application to shortlisted
    * @Access Private (Employer Only)
 */

router.put('/:applicationId/shortList', auth, employerOnly, async (req, res) => {
    try {
        const {applicationId} = req.params;
        const application = await ApplicationModel.findByIdAndUpdate(applicationId, {status: shortlisted}, {new: true});
        res.status(200).json(application);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 * @Route Put /:applicationId/reject
 * @Desc Update the status of the application to rejected
 * @Access Private (Employer Only)
 */

router.put('/:applicationId/reject', auth, employerOnly, async (req, res) => {
    try {
        const {applicationId} = req.params;
        const application = await ApplicationModel.findByIdAndUpdate(applicationId, {status: rejected}, {new: true});
        res.status(200).json(application);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

module.exports = router;