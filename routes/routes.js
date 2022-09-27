import express, { Router }  from "express";
const routes=express.Router();
import registerController from "../controller/auth/registerController";
import loginController from "../controller/auth/loginController";
import healthCheckController from "../controller/healthCheckController"
import {verifyAdmin} from "../middleware/verification"
import userController from "../controller/userConstroller"
import blogController from "../controller/blogController"
//Health Check
routes.get("/healthcheck",healthCheckController.healthCheck);
//auth
routes.post("/login",loginController.login);
routes.post("/register",registerController.register);

//user
routes.get("/profile/:id",userController.profile)
routes.get("/users",verifyAdmin,userController.allUsers)
routes.delete("/user/:id",verifyAdmin,userController.deleteUser)

//Blogs
routes.post("/newBlog/:id")
routes.delete("/delBlog/:id")
routes.get("/allBlogs/:id")//return all blogs of a person



export default routes;