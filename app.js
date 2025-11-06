const express = require('express')
const app = express()
const tarefas = require('./routes/tarefas')
const conexaoBD = require('./BD/connection')
require('dotenv').config()
const nEncontardo = require('./middleware/nao-encontrado')
const erroHandlerMiddleware = require('./middleware/error-handler')


// middleware 
app.use(express.json())


//Rotas 
app.use('/api/v1/tarefas',tarefas)
app.use(nEncontardo)
app.use(erroHandlerMiddleware)
const port = 3000 || process.env.PORT

//Conexãp com o banco de dados 
const comecaConexao =  async () => {
    try {
        await conexaoBD(process.env.MONGO_URI)
        app.listen(port,console.log(`Servidor está ouvindo na porta ${port}...`))

    } catch (error) {
        console.log(error)
    }
}

comecaConexao()

