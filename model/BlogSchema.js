import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, required:true, maxlength:500},
    blog:{type:String, required:true},
    user_id:{type:String, required:true},
    tags:{type:[String], required:true, indexd:true},
},{timestamps:true});

export default mongoose.model("Blog",BlogSchema);