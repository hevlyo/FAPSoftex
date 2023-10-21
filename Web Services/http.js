// Exemplo de solicitação GET usando o módulo HTTP do Node.js
const http = require('http');

http.get('http://exemplo.com/recurso', (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log(data);
  });
});

// Exemplo de solicitação POST usando o módulo axios no Node.js
const axios = require('axios');

axios.post('http://exemplo.com/recurso', {
  dados: 'algum dado'
})
  .then((res) => {
    console.log(`Status da resposta: ${res.status}`);
    console.log('Resposta:', res.data);
  })
  .catch((err) => {
    console.error('Erro:', err);
  });

// Exemplo de solicitação PUT usando o módulo request no Node.js
const request = require('request');

request.put('http://exemplo.com/recurso', { json: { dados: 'algum dado' } }, (err, res, body) => {
  if (err) { return console.error('Erro:', err); }
  console.log(`Status da resposta: ${res.statusCode}`);
  console.log('Resposta:', body);
});

// Exemplo de solicitação DELETE usando o módulo axios no Node.js
axios.delete('http://exemplo.com/recurso')
  .then((res) => {
    console.log(`Status da resposta: ${res.status}`);
  })
  .catch((err) => {
    console.error('Erro:', err);
  });

// Exemplo de solicitação PATCH usando o módulo fetch no navegador
fetch('http://exemplo.com/recurso', {
  method: 'PATCH',
  body: JSON.stringify({ dados: 'algum dado' }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error('Erro:', err));

// WSDL (Web Services Description Language):

/* 
O WSDL é um documento XML que descreve serviços da web, incluindo informações como operações suportadas, tipos de dados, formato das mensagens XML, etc. Ele é composto por quatro partes principais:

1. Definição (types): define os tipos de dados usados no serviço da web.
2. Mensagens (messages): define a estrutura das mensagens trocadas entre o cliente e o serviço.
3. Porta (port): define o endereço de rede no qual o serviço pode ser acessado.
4. Vinculação (binding): define os detalhes de como o serviço deve ser acessado.

O WSDL permite que os clientes compreendam como interagir com o serviço da web sem conhecer os detalhes de sua implementação subjacente. 
*/