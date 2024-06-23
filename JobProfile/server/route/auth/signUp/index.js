require("dotenv").config();
import express from "express";
import bcrypt from "bcrypt";
import {UserModel} from "../../../Database/user";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/", async (req, res) => {
const {email, password, userName, role} = req.body;
try {
  const existingUser =  await UserModel.findOne({email: email});
  if(existingUser){
    return res.status(400).json({message: "User already exists"});
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await UserModel.create({
    email: email,
    password: hashPassword,
    userName: userName,
    role: role
  });
  const token = jwt.sign({email: user.email, id: user._id}, process.env.SECRET_KEY);
  res.status(200).json({user: user, token: token});



} catch (err){
console.log(err);
res.status(500).json({message: "Something went wrong"});
}
});
module.exports =  router;