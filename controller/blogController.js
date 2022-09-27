import BlogSchema from "../model/BlogSchema";

const userController = {
    async profile(req,res,next) {
        try{
            const result =  await BlogSchema.find()
            res.json(result)
        }catch(err) {
            next(err)
        }
    }
}

export default userController;