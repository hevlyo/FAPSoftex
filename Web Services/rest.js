const express = require('express');
const app = express();
app.use(express.json());

let livros = [
  { id: 1, nome: 'A Guerra dos Tronos', autor: 'George R. R. Martin', isbn: '978-0553103540' },
  { id: 2, nome: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', isbn: '978-0544003415' }
];

// Operação de leitura (Read)
app.get('/livros', (req, res) => {
  res.json(livros);
});

// Operação de criação (Create)
app.post('/livros', (req, res) => {
  const novoLivro = req.body;
  livros.push(novoLivro);
  res.status(201).send('Livro adicionado com sucesso');
});

// Operação de atualização (Update)
app.put('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const livroAtualizado = req.body;
  livros = livros.map((livro) => (livro.id === id ? livroAtualizado : livro));
  res.send('Livro atualizado com sucesso');
});

// Operação de exclusão (Delete)
app.delete('/livros/:id', (req, res) => {
  const id = parseInt(req.params.id);
  livros = livros.filter((livro) => livro.id !== id);
  res.send('Livro removido com sucesso');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
