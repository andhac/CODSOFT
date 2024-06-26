import express from "express";
import {CompanyModel, JobModel, UserModel} from "../../Database/allModel";

const {auth} = require('../../middlewares/auth');
const router = express.Router();

/**
    @Route POST /
    @Desc Create a new job
    @Access Private
 **/

router.post('/', auth, async (req, res) => {
    try{
        const {title, description, company, role, location, employmentType} = req.body;
        const user = await UserModel.findById(req.userId);
        if(!user){
            return res.status(400).json({message: "User does not exist"});
        }
        if(user.role !== "employer"){
            return res.status(400).json({message: "User is not authorized to create job"});
        }
        const checkCompany = await CompanyModel.findOne({name: company});
        if(!checkCompany){
            return res.status(400).json({message: "Company does not exist"});
        }
        const job = await JobModel.create({
            title: title,
            description: description,
            company:checkCompany._id,
            role: role,
            location: location,
            employmentType: employmentType,
            postedBy: req.userId
        })
        res.status(200).json({job: job});

    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 @Route GET /
 @Desc Get all jobs based on title
 @Access Public
 **/

router.get('/', async (req, res) => {
    try {
        const {title} = req.query;
        const job = await JobModel.find({title: new RegExp(title, 'i')});
        if (job.length === 0) {
            return res.status(400).json({message: "No job found"});
        }
        res.status(200).json(job);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 @Route GET /
 @Desc Get all jobs based on company
 @Access Public
 **/

router.get('/company', async (req, res) => {
    try {
        const {company} = req.query;
        const checkCompany = await CompanyModel.findOne({name: company});
        if (!checkCompany) {
            return res.status(400).json({message: `${company} Company does not exist`});
        }
        const job = await JobModel.find({company: checkCompany._id});
        if (job.length === 0) {
            return res.status(400).json({message: `No job found in the ${company} `});
        }
        res.status(200).json(job);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 * @Route GET /:_id
 * @Desc Get job by id
 * @Access Public
 */
router.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const job = await JobModel.find({_id: id});
        if(job.length === 0){
            return res.status(400).json({message: "No job found for this particular Role"});
        }
        res.status(200).json(job);
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 @Route Put /:_id
 @Desc Update job by id
 @Access Private
 **/

router.put('/:_id', auth, (req, res) => {
    try {
        const {_id} = req.params;
        const {title, description, company, location, employmentType} = req.body;
        const user = UserModel.findById(req.userId);
        if (user.role !== "employer") {
            return res.status(400).json({message: "User is not authorized to update job"});
        }
        const checkJob = JobModel.findById(_id);
        if (!checkJob) {
            return res.status(400).json({message: "Job does not exist"});
        }
        const job = JobModel.findByIdAndUpdate(_id, {
            title: title,
            description: description,
            company: company,
            location: location,
            employmentType: employmentType
        })
        res.status(200).json({job: job});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

module.exports = router;