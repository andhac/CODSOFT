require("dotenv").config();
import express from "express";
import {UserModel} from "../../../Database/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
    const {email, password} = req.body;
    try{
        const existingUser = await UserModel.findOne({email: email});
        if (!existingUser){
            return res.status(400).json({message: "User does not exist"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({email:existingUser.email, id: existingUser._id}, process.env.SECRET_KEY);

        // const userToSend = {
        //     email: existingUser.email,
        //     id: existingUser._id,
        //     userName: existingUser.userName,
        //     role: existingUser.role,
        //     profile: existingUser.profile
        // };
        res.cookie('token', token,{httpOnly: true, maxAge: 24*60*60*1000})
        res.status(200).json({user: existingUser, token: token});
    }catch (err) {
        console.log(err);
        res.status(500).json({message: "Something went wrong"});
    }
});

router.get('/', async (req, res) => {
  res.send('Hello from login');
})
module.exports =  router;