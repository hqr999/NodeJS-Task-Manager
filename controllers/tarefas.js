const pegaTodasTarefas = (req, res) => {
    res.send('todos os itens')
}

const criaTarefa = (req, res) => {
    res.json(req.body)
}

const pegaTarefa = (req, res) => {
    res.json({id:req.params.id})
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