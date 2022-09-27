import express from "express";
const app=express();
import {PORT} from "./config/config";
import connection from "./utils/connection";
import routes from "./routes/routes";
import errorHandler from "./middleware/errorHandler"
import path from 'path'
import bodyparser from "body-parser"
import cors from "cors"
import cookieparser from 'cookie-parser';

global.appRoot=path.resolve(__dirname);
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());
app.use(cookieparser());
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(PORT,async()=>{
    console.log(`Listen port on ${PORT}`);
    await connection();
});


