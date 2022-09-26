import mongoose from "mongoose";
import {DB_URL} from "../config/config"

const connection=()=>{
    try{
      mongoose.connect(DB_URL);
      console.log("DB Connected ....");
    }catch(err){
        console.log("DB Error:"+ err);
    }
}

export default connection;