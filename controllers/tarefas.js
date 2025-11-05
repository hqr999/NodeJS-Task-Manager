const Tarefa = require('../Models/tarefa')

const pegaTodasTarefas = async (req, res) => {
    try {
        const tds_tarefas = await Tarefa.find({})
        res.status(200).json({ tds_tarefas })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const criaTarefa = async (req, res) => {
    try {
        const tarefa = await Tarefa.create(req.body)
        res.status(201).json({ tarefa })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const pegaTarefa = async (req, res) => {
    try {
        const { id: idTarefa } = req.params;
        const tarefa = await Tarefa.findOne({ _id: idTarefa })

        if (!tarefa) {
            return res.status(404).json({ msg: `Nenhuma tarefa com esse id: ${idTarefa}` })
        }
        res.status(200).json({ tarefa })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const atualizaTarefa = (req, res) => {
    res.send('tarefa atualizada')
}

const deletaTarefa = async (req, res) => {
    try {
        const { id: idTarefa } = req.params
        const tarefa = await Tarefa.findByIdAndDelete({ _id: idTarefa })
        if (!tarefa) {
            res.status(404).json({ msg: `Nenhuma tarefa com o id: ${idTarefa}` })
        }
        res.status(200).json({ tarefa })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = {
    pegaTodasTarefas,
    criaTarefa,
    pegaTarefa,
    atualizaTarefa,
    deletaTarefa,
}