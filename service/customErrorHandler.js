class customErrorHandler extends Error{
    constructor(status,msg){
        this.message=msg;
        this.status=status;
    }

}

export default customErrorHandler;