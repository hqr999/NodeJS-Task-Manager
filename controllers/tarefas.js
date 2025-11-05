const Tarefa = require('../Models/tarefa')
const asyncWrapper = require('../middleware/async')

const pegaTodasTarefas = asyncWrapper(async (req, res) => {
    const tds_tarefas = await Tarefa.find({})
    res.status(200).json({ tds_tarefas })
    //res.status(200).json({status: "success", data: {tds_tarefas, numero_elementos: tds_tarefas.length}}) -> outro padrão de resposta
})

const criaTarefa = asyncWrapper(async (req, res) => {
    const tarefa = await Tarefa.create(req.body)
    res.status(201).json({ tarefa })

})

const pegaTarefa = asyncWrapper(async (req, res) => {
    const { id: idTarefa } = req.params;
    const tarefa = await Tarefa.findOne({ _id: idTarefa })

    if (!tarefa) {
        return res.status(404).json({ msg: `Nenhuma tarefa com esse id: ${idTarefa}` })
    }
    res.status(200).json({ tarefa })
})



const deletaTarefa = asyncWrapper(async (req, res) => {
    const { id: idTarefa } = req.params
    const tarefa = await Tarefa.findByIdAndDelete({ _id: idTarefa })
    if (!tarefa) {
        res.status(404).json({ msg: `Nenhuma tarefa com o id: ${idTarefa}` })
    }
    res.status(200).json({ tarefa })
})

const atualizaTarefa = asyncWrapper(async (req, res) => {
    const { id: idTarefa } = req.params;
    const tarefa = await Tarefa.findOneAndUpdate({ _id: idTarefa }, req.body, {
        new: true,
        runValidators: true,
    });

    if (!tarefa) {
        return res.status(404).json({ msg: `Nenhuma tarefa com o id: ${idTarefa}` })
    }
    res.status(200).json({ tarefa })

})


module.exports = {
    pegaTodasTarefas,
    criaTarefa,
    pegaTarefa,
    atualizaTarefa,
    deletaTarefa,
}