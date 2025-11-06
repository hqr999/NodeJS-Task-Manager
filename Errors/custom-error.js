class CustomApiError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomError = (msg,sttsCode) => {
    return new CustomApiError(msg,sttsCode)
}

module.exports = {createCustomError,CustomApiError}