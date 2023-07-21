## Instruções

Elabore um algoritmo que representa um cadastro. Ele deve ler os seguintes dados fornecidos pelo usuário:

- Nome
- Endereço
- Cidade
- CPF
- RG
- Idade
- Nome do pai
- Nome da mãe
- Peso
- Renda bruta

Apresente as informações solicitadas no final do cadastro.

## Resolução (algoritmo feito em portugol)

```portugol
Algoritmo CadastroPessoal
Var
    nome, endereco, cidade, cpf, rg, nomePai, nomeMae: caractere
    idade: inteiro
    peso, rendaBruta: real

Inicio
    Escreva("==== Cadastro de Pessoa ====")
    
    Escreva("Digite o Nome: ")
    Leia(nome)
    
    Escreva("Digite o Endereço: ")
    Leia(endereco)
    
    Escreva("Digite a Cidade: ")
    Leia(cidade)
    
    Escreva("Digite o CPF: ")
    Leia(cpf)
    
    Escreva("Digite o RG: ")
    Leia(rg)
    
    Escreva("Digite a Idade: ")
    Leia(idade)
    
    Escreva("Digite o Nome do Pai: ")
    Leia(nomePai)
    
    Escreva("Digite o Nome da Mãe: ")
    Leia(nomeMae)
    
    Escreva("Digite o Peso: ")
    Leia(peso)
    
    Escreva("Digite a Renda Bruta: ")
    Leia(rendaBruta)
    
    Escreva("==== Informações do Cadastro ====")
    Escreva("Nome: ", nome)
    Escreva("Endereço: ", endereco)
    Escreva("Cidade: ", cidade)
    Escreva("CPF: ", cpf)
    Escreva("RG: ", rg)
    Escreva("Idade: ", idade, " anos")
    Escreva("Nome do Pai: ", nomePai)
    Escreva("Nome da Mãe: ", nomeMae)
    Escreva("Peso: ", peso, " kg")
    Escreva("Renda Bruta: R$", rendaBruta)
    
FimAlgoritmo
```