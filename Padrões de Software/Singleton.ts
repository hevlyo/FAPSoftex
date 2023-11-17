class SistemaSeguranca {
    private static instancia: SistemaSeguranca;
    private senhaBaseSecreta: string = "senhasegura123";
  
    private constructor() {}
  
    static getInstance(): SistemaSeguranca {
      if (!this.instancia) {
        this.instancia = new SistemaSeguranca();
      }
      return this.instancia;
    }
  
    acessarBaseSecreta(senhaInserida: string): void {
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
  