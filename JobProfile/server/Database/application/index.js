import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    jobId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coverLetter:{
        type: String,
        required: true
    },
    resume:{
        type: String,
        required: true
    }, //Url for the resume
    status:{
        type: String,
        enum:['applied', 'viewed' , 'shortlisted', 'rejected'],
        default: 'applied'
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
});

export const ApplicationModel = mongoose.model('Application', ApplicationSchema);