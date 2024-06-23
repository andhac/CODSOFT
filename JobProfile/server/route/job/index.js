import express from "express";
import {JobModel, CompanyModel, UserModel} from "../../Database/allModel";
const auth = require('../../middlewares/auth');
const router = express.Router();

/**
    @Route POST /
    @Desc Create a new job
    @Access Private
 **/

router.post('/', auth, async (req, res) => {
    try{
        const {title, description, company, location, employmentType, postedBy} = req.body;
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
module.exports = router;