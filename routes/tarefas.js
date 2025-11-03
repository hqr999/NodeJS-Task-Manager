const express = require('express');
const { pegaTodasTarefas,criaTarefa,atualizaTarefa,pegaTarefa,deletaTarefa } = require('../controllers/tarefas');
const roteador = express.Router();


roteador.route('/').get(pegaTodasTarefas).post(criaTarefa)
roteador.route('/:id').get(pegaTarefa).patch(atualizaTarefa).delete(deletaTarefa)

module.exports = roteador;