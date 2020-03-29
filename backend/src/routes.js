const express = require('express');

const routes = express.Router();

/**
 * Métodos HTTP:
 *
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetro:
 *
 * Query Params: Parâmetro nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/ongs', (req, res) => {
  const data = req.body;

  console.log(data);

  return res.json({ Hello: 'World!' });
});

module.exports = routes;
