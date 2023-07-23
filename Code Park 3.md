## Instruções

Em uma inscrição, o usuário informou os seguintes dados:

- Nome: José Almeida da Silva
- CPF: 12345678900
- RG: 9517530
- Altura: 1,78
- Endereço: Rua A, 380 – Centro – Recife/PE

No algoritmo, descreva como será:
1. A proposta das variáveis;
2. Elaborada a declaração das variáveis;
3. Utilizado o comando de atribuição.

## Resolução

```portugol
algoritmo "Inscrição de Usuário"
var
    Nome: caractere[50]
    CPF: inteiro
    RG: inteiro
    Altura: real
    Endereco: registro
        rua: caractere[50]
        numero: inteiro
        bairro: caractere[50]
        cidade: caractere[50]
        estado: caractere[2]
    fim registro

inicio
    Nome <- "José Almeida da Silva"
    CPF <- 12345678900
    RG <- 9517530
    Altura <- 1.78
    Endereco.rua <- "Rua A"
    Endereco.numero <- 380
    Endereco.bairro <- "Centro"
    Endereco.cidade <- "Recife"
    Endereco.estado <- "PE"
fim.
```
