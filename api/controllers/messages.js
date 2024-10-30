const express = require('express');

const router = express.Router();

// criar rota cadastrar :

router.post('/', async (req, res) => {

  // receber os dados na api
  var data = req.body;

  return res.json({
    error: false,
    message: 'Mensagem cadastrada com sucesso.',
    data
  });
});

// exportar routes
module.exports = router;
