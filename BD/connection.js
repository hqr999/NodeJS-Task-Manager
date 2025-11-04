const mongoose = require('mongoose')




const conectarBD = (url) => {
    return mongoose.connect(url)
}


module.exports = conectarBD