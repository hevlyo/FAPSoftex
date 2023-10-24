const express = require('express');
const app = express();
app.use(express.json());

let alunos = [
  { id: 1, nome: 'João', idade: 20 },
  { id: 2, nome: 'Maria', idade: 22 },
  { id: 3, nome: 'José', idade: 21 }
];

// Operação de listagem de todos os alunos (Read)
app.get('/alunos', (req, res) => {
  res.status(200).json(alunos);
});

// Operação de busca de um aluno por ID (Read)
app.get('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const aluno = alunos.find(aluno => aluno.id === id);
  if (aluno) {
    res.status(200).json(aluno);
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

// Operação de criação de um novo aluno (Create)
app.post('/alunos', (req, res) => {
  const novoAluno = req.body;
  alunos.push(novoAluno);
  res.status(201).send('Aluno adicionado com sucesso');
});

// Operação de atualização de um aluno por ID (Update)
app.put('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const alunoAtualizado = req.body;
  alunos = alunos.map(aluno => aluno.id === id ? alunoAtualizado : aluno);
  res.status(200).send('Aluno atualizado com sucesso');
});

// Operação de exclusão de um aluno por ID (Delete)
app.delete('/alunos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  alunos = alunos.filter(aluno => aluno.id !== id);
  res.status(200).send('Aluno removido com sucesso');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
