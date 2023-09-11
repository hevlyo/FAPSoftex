class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        if (nome.length < 3) {
            console.log('Nome muito curto');
            return;
        }
        if (typeof nome !== 'string') {
            console.log('Nome deve ser uma string');
            return;
        }
        this._nome = nome;
    }

    get idade() {
        return this._idade;
    }

    set idade(idade) {
        if (idade < 0) {
            console.log('Idade inválida');
            return;
        }
        if (typeof idade !== 'number') {
            console.log('Idade deve ser um número');
            return;
        }
        this._idade = idade;
    }
}

const pessoa = new Pessoa('João', 20);
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.nome = 'Pedro';
pessoa.idade = 30;
console.log(pessoa.nome);
console.log(pessoa.idade);
pessoa.nome = 'a';
