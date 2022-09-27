import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
   name:{type:String, required:true},
   email:{type:String, required:true, unique:true},
   password:{type:String, required:true},
   image:{type:String, dafault:" "},
   about:{type:String, default:"I am newbie"},
   age:{type:Number},
   isAdmin:{type:Boolean, default:false}
})

export default mongoose.model("User",UserSchema); 