const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    name: String, completed: Boolean
})

module.exports = mongoose.model('Tarefa',TarefaSchema)