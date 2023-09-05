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