function errorHandler(err,req,res,next){
   const errStatus=err.status || 500;
   const errmessage= err.message||"Internal Server Error";

   return res.status(errStatus).json({
    success:false,
    status:errStatus,
    message:errmessage,
    stack:err.stack
   });
}

export default errorHandler;