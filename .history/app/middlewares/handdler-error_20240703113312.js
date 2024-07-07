const { StatusCodes } = require("http-status-codes")

const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        // set default
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong try again leter',
    };

    // error validation dari mongoose
    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.values)
        .map((item) => )
    }
}