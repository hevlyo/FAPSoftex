const pessoas = [
    {
        nome: 'Thayna',
        idade: 29,
        profissao: 'Advogata',
        cidade: 'Natal'
    },
    {
        nome: 'Riquelme',
        idade: 21,
        profissao: 'Programador',
        cidade: 'Natal'
    },
    {
        nome: 'José',
        idade: 89,
        profissao: 'Professor',
        cidade: 'Pernambuco'
    },
    {
        nome: 'Ana',
        idade: 28,
        profissao: 'Designer',
        cidade: 'Minas Gerais'
    }
];
    
for (const i in pessoas) {
    console.log(`Pessoa ${Number(i) + 1}:`);
    for (let prop in pessoas[i]) {
      console.log(`${prop}: ${pessoas[i][prop]}`);
    }
    console.log();
  }
  
  for (let pessoa of pessoas) {
    console.log(`Pessoa:`);
    for (let prop in pessoa) {
      console.log(`${prop}: ${pessoa[prop]}`);
    }
    console.log();
  }