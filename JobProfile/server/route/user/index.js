import express from "express";
import {auth} from "../../middlewares/auth";

//modals
import {UserModel} from '../../Database/user'

const router = express.Router();


/**
 * Route: /user
 * @description Get user data based on token
 * @access Private
 */

router.get('/', auth, async (req, res) => {
try{
    const user = await UserModel.findById(req.userId).select("-password");
    if (!user){
        return res.status(404).json({message: "User not found"});
    }
    return res.status(200).json({user: user});

}catch (err){
    return res.status(500).json({error:err.message})
}

})

/**
 * Route: /user/:id
 * @description Get user data
 * @access Public
 */

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const getUser = await UserModel.findById(id);
        if (!getUser){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({user: getUser});
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

/**
 * Route: /user/update/:id
 * @description Update user data
 * @access Private
 */

router.put('/update/:id', async (req, res) => {
    const {_id} = req.params;
    try{
        const updateUserData = await UserModel.findByIdAndUpdate(
            _id,
            {
                $set: req.body
            },
            {new: true}
        );
        return res.status(200).json({user: updateUserData});
    }catch (err){
        return res.status(500).json({error:err.message})
    }
})

module.exports = router;