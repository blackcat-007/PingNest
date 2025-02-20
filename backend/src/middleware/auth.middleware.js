
import jwt from "jsonwebtoken";//jwt function  from jsonwebtoken module
import User from"../models/user.model.js";//getting user collection/class from model folder
//***jwt is a token format used for securely transmitting information between parties as json object 
export const protectRoute=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;//fetches the jwt token from cookies from the http request header comes to backend
        if(!token){
            return res.status(401).json({message:"Unauthorized-no Token provided"});
        }
        const decoded= jwt.verify(token,process.env.JWT_SECRET)//decoding jwt token using jwt secret
        if(!decoded){
            return res.status(401).json({message:"Unauthorized-Invalid Token"});
        }
        const user=await User.findById(decoded.userId).select("-password");//getting the user details excluding the password field 
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        req.user=user;
        next();
    }catch(error){
        console.log("error in protectRoute",error.message);
        res.status(500).json({message:"Internal server error"});

    }
}
