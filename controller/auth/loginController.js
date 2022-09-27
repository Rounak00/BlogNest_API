import UserSchema from "../../model/UserSchema";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {JWT_SECRET} from "../../config/config"
import customErrorHandler from "../../service/customErrorHandler"

const loginController={
  async login(req,res,next){
    try { 
    const {email}=req.body;
    const isExist= await UserSchema.findOne({email:email});
    if(!isExist){return next(customErrorHandler.unAuthorized())}

    const newUser=bcrypt.compareSync(req.body.password,isExist.password);
    if(!newUser){return res.status(401).json("msg:wrong Password")}

    const generateToken=jwt.sign({
        id:isExist._id,
        isAdmin:isExist.isAdmin
    },JWT_SECRET)

    const {password,isAdmin,__v,...other}=isExist._doc
    res.cookie("access_token",generateToken,{httpOnly:true}).status(201).json(other)
  }catch(error){
    next(error);
  }

},
};

export default loginController;