const express = require('express')
const app = express()
const tarefas = require('./routes/tarefas')
const conexaoBD = require('./BD/connection')
require('dotenv').config()
const nEncontardo = require('./middleware/nao-encontrado')

const port = 3000



// middleware 
app.use(express.json())


//Rotas 
app.use('/api/v1/tarefas',tarefas)
app.use(nEncontardo)

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

