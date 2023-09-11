class Pessoa {
    constructor(nome, idade, cargo, salario) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
      this.salario = salario;
    }
  
    exibirInfo() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Cargo: ${this.cargo}`);
      console.log(`Salário: ${this.salario}`);
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario, departamento) {
      super(nome, idade, cargo, salario);
      this.departamento = departamento;
    }
  
    exibirInfo() {
      super.exibirInfo();
      console.log(`Departamento: ${this.departamento}`);
    }
  }
  
  const pessoa1 = new Pessoa('Alice', 30, 'Criadora de Conteúdo', 5000);
  const funcionario1 = new Funcionario('Bob', 25, 'Construtor', 8000, 'Construção');
  
  console.log('Informações da Pessoa:');
  pessoa1.exibirInfo();
  
  console.log('\nInformações do Funcionário:');
  funcionario1.exibirInfo();
  