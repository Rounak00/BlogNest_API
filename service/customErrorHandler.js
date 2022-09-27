class customErrorHandler extends Error{
    constructor(status,msg){
        super();
        this.message=msg;
        this.status=status;
    }
  static unAuthorized(msg="User is unauthorized, Please register first"){
    return new customErrorHandler(401,msg);
  }
  static notAdmin(msg="You are not Admin "){
    return new customErrorHandler(401,msg);
  }
}

export default customErrorHandler;