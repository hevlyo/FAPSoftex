# Rest

As seis regras fundamentais de uma API REST, que são derivadas das restrições arquiteturais que definem a arquitetura REST, são as seguintes:

Arquitetura cliente-servidor: A arquitetura deve ser dividida entre os componentes de cliente e servidor. Isso permite que eles evoluam de forma independente, com cada parte focada em sua própria função.

Sem estado (Stateless): Cada requisição do cliente para o servidor deve conter toda a informação necessária para entender e processar a requisição. O servidor não deve manter nenhum estado das requisições anteriores do cliente. Isso simplifica a arquitetura do servidor e melhora a escalabilidade.

Cacheável: As respostas para requisições devem ser explicitamente ou implicitamente marcadas como cacheáveis ou não-cacheáveis. Isso ajuda a melhorar a performance e eficiência da comunicação entre cliente e servidor, reduzindo a necessidade de transferência de dados desnecessários.

Interface uniforme: A interface entre o cliente e o servidor deve ser uniforme, facilitando a compreensão e utilização da API. Isso é conseguido através de quatro princípios:

a. Identificação de recursos: Cada recurso deve ser unicamente identificado através de um URI.
b. Manipulação de recursos através de representações: O cliente manipula o recurso através da manipulação de representações textuais das informações, como JSON ou XML.
c. Mensagens auto-descritivas: Cada mensagem deve conter informações suficientes para descrever como o servidor processará a requisição.
d. HATEOAS (Hypermedia as the Engine of Application State): O servidor deve prover links navegáveis para permitir que o cliente descubra e execute ações disponíveis.

Sistema em camadas (Layered system): A arquitetura deve ser organizada em camadas hierárquicas, de modo que um cliente não possa perceber se está conectado diretamente ao servidor final ou a um intermediário.

Código sob demanda (Optional): Opcionalmente, os clientes podem baixar e executar código de forma dinâmica, como applets ou scripts. Isso permite que a funcionalidade do cliente seja estendida por meio de lógica personalizada fornecida pelo servidor.