import UserSchema from "../../model/UserSchema";
import bcrypt from 'bcrypt';

const registerController={
    async register (req,res,next){
        const {name, email, password, image, about, age, isAdmin}=req.body;

        //hash password
        const salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(password,salt);

        const newUser=new UserSchema({
            name:name,
            email:email,
            password:hashPassword,
            image:image,
            about:about,
            age:age,
            isAdmin:isAdmin
        });
        try{
            await newUser.save();
            res.json("msg: Please Log in, You are registeredc successfully");
        }catch(error){
            next(error);
        }
    },
};

export default registerController;