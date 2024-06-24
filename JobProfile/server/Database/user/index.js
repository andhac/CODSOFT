import mongoose, {Schema} from 'mongoose';
const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum:['employer', 'job-seeker'],
        required: true
    },
    profile:{
        name: String,
        contactNumber: String,
        resume: String, //For Job Seeker
        company:{
            type: Schema.Types.ObjectId, ref: 'Company' //For Employer
        }
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})

export const UserModel = mongoose.model('Users', UserSchema)