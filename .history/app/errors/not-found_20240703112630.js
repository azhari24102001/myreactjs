const CustomAPIError = require("./custom-api-error");

class NotFound extends CustomAPIError{
    constructor(message){
        super(message);

        this.statusCode
    }
}