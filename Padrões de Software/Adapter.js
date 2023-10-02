class Pato {
    quack() {
      console.log("Pato faz quack!");
    }
  
    voa() {
      console.log("Pato voa!");
    }
  }
  
  class Galinha {
    cacareja() {
      console.log("Galinha faz cacarejo!");
    }
  
    voa() {
      console.log("Galinha não voa!");
    }
  }
  
  class AdaptadorPato {
    constructor(pato) {
      this.pato = pato;
    }
  
    cacareja() {
      this.pato.quack();
    }
  
    voa() {
      this.pato.voa();
    }
  }
  
  class AdaptadorPatoDemo {
    static main() {
      const pato = new Pato();
      const adaptador = new AdaptadorPato(pato);
  
      console.log("Testando o Pato:");
      pato.quack();
      pato.voa();
  
      console.log("\nUsando o Pato como uma Galinha através do Adaptador:");
      adaptador.cacareja();
      adaptador.voa();
    }
  }
  
  AdaptadorPatoDemo.main();
  