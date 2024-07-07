const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
    constructor(message)
}