const express = require('express');
const { pegaTodasTarefas } = require('../controllers/tarefas');
const roteador = express.Router();


roteador.route('/').get(pegaTodasTarefas)

module.exports = roteador;