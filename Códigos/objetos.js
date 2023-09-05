// Objeto abstrato: Biqueira de Drogas
const BiqueiraDeDrogas = {
    // Atributos
    localizacao: "Rua das Sombras",
    estoque: [],
    clientes: [],
  
    // Métodos
    adicionarDroga: function (tipo, quantidade, preco) {
      this.estoque.push({ tipo, quantidade, preco });
      console.log(`Adicionado ${quantidade}g de ${tipo} ao estoque por R$${preco.toFixed(2)} cada.`);
    },
  
    realizarVenda: function (cliente, tipo, quantidade) {
      const droga = this.estoque.find((item) => item.tipo === tipo);
  
      if (!droga || droga.quantidade < quantidade) {
        console.log(`Desculpe, ${tipo} não está disponível em quantidade suficiente.`);
        return;
      }
  
      const custoTotal = quantidade * droga.preco;
      console.log(`Venda realizada para ${cliente}: ${quantidade}g de ${tipo} por R$${custoTotal.toFixed(2)}.`);
      droga.quantidade -= quantidade;
    },
  
    registrarCliente: function (nome) {
      this.clientes.push(nome);
      console.log(`Novo cliente registrado: ${nome}`);
    },
  
    listarEstoque: function () {
      console.log("Estoque disponível:");
      this.estoque.forEach((item) => {
        console.log(`${item.quantidade}g de ${item.tipo} por R$${item.preco.toFixed(2)} cada.`);
      });
    },
  
    listarClientes: function () {
      console.log("Clientes frequentes:");
      this.clientes.forEach((cliente) => {
        console.log(cliente);
      });
    },
  
    calcularLucro: function () {
      const totalVendas = this.estoque.reduce((total, item) => total + item.preco * item.quantidade, 0);
      console.log(`Lucro total: R$${totalVendas.toFixed(2)}`);
    },
  };
  
  // Exemplo de uso
  BiqueiraDeDrogas.adicionarDroga("Cocaína", 100, 50);
  BiqueiraDeDrogas.adicionarDroga("Maconha", 200, 20);
  BiqueiraDeDrogas.registrarCliente("João");
  BiqueiraDeDrogas.realizarVenda("João", "Cocaína", 10);
  BiqueiraDeDrogas.listarClientes();
  BiqueiraDeDrogas.listarEstoque();
  BiqueiraDeDrogas.calcularLucro();

// Objeto abstrato: Jogo do Bicho
const JogoDoBicho = {
  nome: "Jogo do Bicho", // Atributo: Nome do jogo
  sorteio: [], // Atributo: Números sorteados
  apostas: [], // Atributo: Lista de apostas

  // Método: Realizar sorteio
  realizarSorteio: function () {
    for (let i = 0; i < 5; i++) {
      // Gera números aleatórios de 00 a 99 para o sorteio
      const numeroSorteado = Math.floor(Math.random() * 100);
      this.sorteio.push(numeroSorteado);
    }
    console.log("Sorteio realizado:", this.sorteio);
  },

  // Método: Fazer uma aposta
  fazerAposta: function (numeroApostado, valorApostado) {
    if (numeroApostado < 0 || numeroApostado > 99) {
      console.log("Número de aposta inválido. Escolha um número entre 00 e 99.");
      return;
    }

    this.apostas.push({ numeroApostado, valorApostado });
    console.log(`Aposta de R$${valorApostado.toFixed(2)} no número ${numeroApostado} realizada.`);
  },

  // Método: Calcular ganhos
  calcularGanhos: function () {
    const premioTotal = this.apostas.reduce((total, aposta) => total + aposta.valorApostado, 0);

    const numerosSorteados = new Set(this.sorteio);
    let ganhos = 0;

    this.apostas.forEach((aposta) => {
      if (numerosSorteados.has(aposta.numeroApostado)) {
        ganhos += aposta.valorApostado * 100; // Prêmio de 100 vezes o valor da aposta
      }
    });

    console.log(`Total apostado: R$${premioTotal.toFixed(2)}`);
    console.log(`Total de ganhos: R$${ganhos.toFixed(2)}`);
  },
};

// Exemplo de uso
JogoDoBicho.realizarSorteio();
JogoDoBicho.fazerAposta(12, 50); // Aposta no número 12 com R$50
JogoDoBicho.fazerAposta(76, 30); // Aposta no número 76 com R$30
JogoDoBicho.calcularGanhos(); // Calcula os ganhos

// Objeto material: Carro
const Carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,
  velocidade: 0, // Atributo: Velocidade atual do carro em km/h
  ligado: false, // Atributo: Indica se o carro está ligado
  combustivel: 50, // Atributo: Quantidade de combustível em litros

  ligar: function () {
    this.ligado = true;
    console.log("O carro está ligado.");
  },

  desligar: function () {
    this.ligado = false;
    console.log("O carro está desligado.");
  },

  acelerar: function (kmh) {
    if (this.ligado) {
      this.velocidade += kmh;
      console.log(`Acelerando para ${this.velocidade} km/h.`);
    } else {
      console.log("O carro está desligado. Ligue o carro para acelerar.");
    }
  },

  abastecer: function (litros) {
    this.combustivel += litros;
    console.log(`Abastecidos ${litros} litros. Combustível total: ${this.combustivel} litros.`);
  },

  verificarCombustivel: function () {
    console.log(`Nível de combustível: ${this.combustivel} litros.`);
  },
};

// Exemplo de uso
Carro.ligar();
Carro.acelerar(60);
Carro.abastecer(20);
Carro.desligar();
Carro.verificarCombustivel();

// Objeto material: Smartphone

const Smartphone = {
  marca: "Samsung",
  modelo: "Galaxy S21",
  armazenamento: "128GB",
  bateria: 80, // Atributo: Nível de bateria em porcentagem
  ligado: false, // Atributo: Indica se o smartphone está ligado
  aplicacoes: ["WhatsApp", "Instagram", "Facebook"], // Atributo: Lista de aplicativos instalados

  ligar: function () {
    this.ligado = true;
    console.log("O smartphone está ligado.");
  },

  desligar: function () {
    this.ligado = false;
    console.log("O smartphone está desligado.");
  },

  verificarBateria: function () {
    console.log(`Nível de bateria: ${this.bateria}%.`);
  },

  instalarApp: function (app) {
    this.aplicacoes.push(app);
    console.log(`${app} foi instalado.`);
  },

  listarApps: function () {
    console.log("Aplicativos instalados:");
    this.aplicacoes.forEach((app) => console.log(app));
  },
};

// Exemplo de uso
Smartphone.ligar();
Smartphone.verificarBateria();
Smartphone.instalarApp("Twitter");
Smartphone.listarApps();
Smartphone.desligar();
