const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    website:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    size:String, //eg., 1-10 employees or 11-50 employees
    logo:String,
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    postedBy:{
        type: Schema.Types.ObjectId, ref: 'User',
        required: true
    }
})

export const CompanyModel = mongoose.model('Company', CompanySchema);