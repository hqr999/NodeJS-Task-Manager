const express = require('express')
const app = express()
const tarefas = require('./routes/tarefas')


const port = 3000

// middleware 
app.use(express.json())


//Rotas 
app.get('/hello',(req,res) => {
    res.send('Gerenciador de Tarefas App')
})

app.use('/api/v1/tarefas',tarefas)


// app.get('/api/v1/tarefas') - pega todas as tarefas 
// app.post('/api/v1/tarefas') - cria uma nova tarefa 
// app.get('/api/v1/tarefas/:id') - pega uma única tarefa 
// app.put('/app/v1/tarefas/:id') - atualiza uma tarefa 
// app.delete('/app/v1/tarefas/:id') - deleta uma tarefa


app.listen(port,console.log(`Servidor está ouvindo na porta ${port}...`))