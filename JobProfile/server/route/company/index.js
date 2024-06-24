import express from "express";
import {CompanyModel, UserModel} from "../../Database/allModel";

const router = express.Router();
const {auth} = require('../../middlewares/auth')
/**
 * @route POST /
 * @desc Create a new company
 * @access Public
 */
router.post('/', auth, async (req, res) => {
    try{
        const {name, description, location, website, size, logo, postedBy } = req.body;
        const checkCompany =  await CompanyModel.findOne({name: name});
        if(checkCompany){
            return res.status(400).json({message: "Company already exists"});
        }
        const user = await UserModel.findById(req.userId);
        if (!user){
            return res.status(400).json({message: "User does not exist"});
        }
        if(user.role !== "employer"){
            return res.status(400).json({message: "User is not authorized to create company"});
        }

        const company = await CompanyModel.create({
            name:name,
            description:description,
            location:location,
            website:website,
            size:size,
            logo:logo,
            postedBy: req.userId
        })
        res.status(200).json({company: company});

    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

/**
 * @route GET /
 * @desc Get all companies based on city
 * @access Public
 */

router.get('/', async (req,res) => {
    try{
        const {city} = req.query
        const company  =  await CompanyModel.find({location:city})
        if(company.length === 0){
            return res.status(400).json({message: "No company found"});
        }
        res.status(200).json({company: company});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
});

/*
    * @route GET /:_id
    * @desc Get company by postedBy id
    * @access Public
 */

router.get('/:_id', async (req,res)=> {
    try{
        const {_id} = req.params;
        const company = await CompanyModel.find({postedBy: _id})
        if(company.length === 0){
            return res.status(400).json({message: "No company found"});
        }
        res.status(200).json({company: company});
    }catch (err){
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
})

module.exports = router;