import jwt from "jsonwebtoken";

const {UserModel} = require('../Database/allModel')
const auth = (req,res,next) => {
    try{
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, process.env.SECRET_KEY);
            req.userId = user.id;
        }else {
            return res.status(401).json({message: "Unauthorized"})
        }
        next();
    }catch (err){
        return res.status(401).json({message: "Unauthorized"})
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