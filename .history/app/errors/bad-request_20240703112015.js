const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
    constructor(message){
        super (message);
        //memberikan statusCode bad request
        this.statusCode
    }
}