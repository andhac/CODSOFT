import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type:{
        type: String,
        enum:['update', 'application'],
        required: true
    },
    message:{
        type: String,
        required: true
    },
    read:{
        type: Boolean,
        default: false
    },
    created_at:{
        type: Date,
        default: Date.now
    },
})

export const NotificationModel = mongoose.model('Notification' , NotificationSchema)