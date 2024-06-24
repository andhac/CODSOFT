import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company',
        required: true
    },
    location:{
        type: String,
        required: true
    },
    employmentType:{
        type: String,
        enum:['full-time', 'part-time', 'internship'],
        required: true
    },
    postedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    featured:{
        type: Boolean,
        default: false
    }
});

export const JobModel = mongoose.model('Job', JobSchema)