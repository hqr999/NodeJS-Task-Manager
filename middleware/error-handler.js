const {CustomApiError} = require('../Errors/custom-error')
const erroHandler = (err,req,res,next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    console.log(err)
    return res.status(err.status).json({msg:'Alguma coisa deu errado, tente de novo'})
}


module.exports = erroHandler