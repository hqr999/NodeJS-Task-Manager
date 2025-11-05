const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'deve fornecer um nome'],
        trim: true,
        maxlength: [20, 'nome não pode ter mais que 20 caracteres']
    }, 
    completed: {
          type: Boolean,
          default: false,  
    }
})

module.exports = mongoose.model('Tarefa', TarefaSchema)