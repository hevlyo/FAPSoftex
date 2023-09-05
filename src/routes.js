const express = require('express');
const app = express.Router();

app.get('/', (req, res) => {
  res.json({
    mensagem: 'Hello World!',
    data: new Date()
  });
});

app.get('/dor', (req, res) => {
  res.json({ mensagem: 'Nenhuma mensagem! apenas dor, only pain'});
});

app.get('/barra', (req, res) => {
  res.json({ "barra": '//////////' });
});

module.exports = app;
