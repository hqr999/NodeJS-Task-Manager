const Tarefa = require('../Models/tarefa')

const pegaTodasTarefas = (req, res) => {
    res.send('todos os itens')
}

const criaTarefa = async (req, res) => {
    const tarefa = await Tarefa.create(req.body)
    res.status(201).json({tarefa})
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