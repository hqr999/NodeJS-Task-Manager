const pegaTodasTarefas = (req, res) => {
    res.send('todos os itens')
}

const criaTarefa = (req, res) => {
    res.send('tarefa criada')
}

const pegaTarefa = (req, res) => {
    res.send('pega única tarefa')
}

const atualizaTarefa = (req, res) => {
    res.send('tarefa atualizada')
}

const deletaTarefa = (req, res) => {
    res.send('tarefa deletada')
}


module.exports = {
    pegaTodasTarefas,
    criaTarefa,
    pegaTarefa, 
    atualizaTarefa,
    deletaTarefa,
}