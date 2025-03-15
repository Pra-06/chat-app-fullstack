import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const protectRoute = async(res,req,next) => {
    try {
       const token = req.cookies.jwt
       if(!token){
        return res.status(401).json({error:"unauthorised-No Token Provided"});
       }
    
       const decoded=jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"unauthorised-No Token Provided"});
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            res.status(401).json({error:"user not found"})
        }
        req.user = user;

        next()
    } catch (error) {
        console.log("Erro in protectRoute Middleware",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export default protectRoute