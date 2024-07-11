import jwt from "jsonwebtoken";

const {UserModel} = require('../Database/allModel')
const auth = async (req,res,next) => {
    try{
        let token = req.headers.authorization ||req.cookies.token ;
        if(!token) {
            return res.status(401).json({message: "Unauthorized"})
        }
        token = token.split(" ")[1]
       let decodedData;
        try{
            decodedData = jwt.verify(token, process.env.SECRET_KEY);
        }catch (err) {
            return res.status(401).json({message:"Invalid Token"})
        }
        req.userId = decodedData.id;
        const user = await UserModel.findById(req.userId);
        if(!user){
            return res.status(404).json({message: "User not found"})
        }
        next();
    }catch (err){
        return res.status(404).json({message: "Internal Server Error"})
    }
}

const employerOnly = async (req, res, next) => {
    try {
        const user = await UserModel.findById(req.userId);
        if (user.role !== "employer") {
            return res.status(400).json({message: "Access denied. Only employer can access this route"});
        }
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {auth, employerOnly}