const express = require('express');
const router = express.Router();

router.get('/exemplo', (req, res) => {
  res.json({ hello: 'Hello World!',
  mensagem: 'Rota de exemplo GET' });
});

module.exports = router;
