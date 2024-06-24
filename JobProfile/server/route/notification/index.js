import express from "express";
import {NotificationModel} from "../../Database/allModel";

const {auth} = require('../../middlewares/auth');
const router = express.Router();

/*
    @Route POST /
    @Desc Create a new notification
    @Access Private
 */
router.post('/', auth, async (req, res) => {
    try {
        const {type, message} = req.body;
        const userId = req.userId;

        const notifi = await NotificationModel.create({
            userId: userId,
            type: type,
            message: message
        })
        res.status(200).json({notification: notifi});
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: "Something went wrong"})
    }
})

/**
 * @Route GET /
 * @Desc Get all notifications based on userId
 * @Access Private
 */

router.get('/', auth, async (req, res) => {
    try {
        const userId = req.userId;
        const allNoti = await NotificationModel.find({userId: userId});
        res.status(200).json({notification: allNoti});
    } catch (err) {
        console.log(err.message)
        res.status(500).json({message: "Something went wrong"})
    }
})

/**
 * @Route Put /:notificationId
 * @Desc Update a notification as read
 * @Access Private
 */

router.put('/:notificationId', auth, async (req, res) => {
    try {
        const {notificationId} = req.params;
        const notification = await NotificationModel.findByIdAndUpdate(notificationId, {read: true}, {new: true});
        res.status(200).json({notification: notification});
    } catch (err) {
        console.log(err.message);
        res.status(500).json({message: "Something went wrong"});
    }
})

module.exports = router;