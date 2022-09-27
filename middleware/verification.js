
import jwt from "jsonwebtoken"
import customErrorHandler from "../service/customErrorHandler"
import { JWT_SECRET } from "../config/config";


export function verifyToken(req,res,next){
    const token = req.cookies.access_token;
    if(!token){
        return next(customErrorHandler.unAuthorized());
    }
    jwt.verify(token,JWT_SECRET, (err, user) => {
        if(err) {
            return res.json({ msg: "You are not authenticated" });
        }
        req.user = user;
        next();
    })
}

export function verifyAdmin(req,res,next){
    verifyToken(req,res,()=>{
        if(req.user,isAdmin){
            next();
        }else{
            return next(customErrorHandler.notAdmin());
        }
    })
}