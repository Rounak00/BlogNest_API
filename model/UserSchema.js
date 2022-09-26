import mongoose from "mongoose";

const UserSchema= new mongoose.schema({
   name:{type:String, required:true},
   email:{type:String, required:true, unique:true},
   password:{type:String, required:true},
   image:{type:String},
   about:{type:String, default:"I am newbie"},
   dateOfBirth:{type:Date},
   isAdmin:{type:Boolean, default:false}
})

export default mongoose.model("User",UserSchema);