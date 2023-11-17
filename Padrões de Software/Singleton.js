class SistemaSeguranca {
  constructor() {
      this.senhaBaseSecreta = "senhasegura123";
  }

  static getInstance() {
      if (!this.instancia) {
          this.instancia = new SistemaSeguranca();
      }
      return this.instancia;
  }

  acessarBaseSecreta(senhaInserida) {
      if (senhaInserida === this.senhaBaseSecreta) {
          console.log("Acesso concedido à Base Secreta!");
      } else {
          console.log("Acesso negado! Intruso detectado!");
      }
  }
}

const agenteSecreto = SistemaSeguranca.getInstance();

agenteSecreto.acessarBaseSecreta("senhasegura123");

agenteSecreto.acessarBaseSecreta("senhaerrada");