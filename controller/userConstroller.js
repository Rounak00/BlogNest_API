import UserSchema from "../../model/UserModel";

const userController = {
    async profile(req,res,next) {
        try{
            const result =  await UserSchema.find(req.params.id)
            res.json(result)
        }catch(err) {
            next(err)
        }
    },
    async allUsers(req,res,next){
        try{
            const result =  await UserSchema.find()
            res.json(result)
        }catch(err){
            next(err);
        }
    },
   async deleteUser(req,res,next){
    try{
      const id=req.params.id;
      await UserSchema.findByIdAndDelete({_id:id});
    }catch(err){
      next(err);
    }
   }
}

export default userController;