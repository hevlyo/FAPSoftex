## Instruções

Acesse pelo menos dois sites de sua preferência e os inspecione com o botão direito do mouse na página web.
Com o código fonte aberto você deve:

- Verificar no código algum elemento que utilize JavaScript;
- Marcar alguns elementos do site;
- Explicar como ele se comporta. Exemplo: entrar no site do Google, inspecionar o botão de pesquisa, verificar o código e explicar qual a finalidade do botão.
- Realize essa atividade, suba esse arquivo em um drive com link público e compartilhe o link no campo ao lado para que outros desenvolvedores possam analisá-lo.

# Explicação (Barra de pesquisa - Youtube Music)

![PT-BR](https://i.imgur.com/TR3UdGE.png)

### Trecho de Código

```HTML
<input 
  id="input"
  autocomplete="off"
  aria-autocomplete="list"
  aria-controls="suggestion-list"
  aria-owns="suggestion-list"
  dir="auto"
  role="combobox"
  class="style-scope ytmusic-search-box"
  placeholder="Search songs, albums, artists, podcasts"
  aria-haspopup="grid"
>
```

O trecho de código HTML representa uma caixa de pesquisa na qual os usuários podem inserir consultas de pesquisa, como músicas, álbuns, artistas e podcasts no YouTube Music. Ele fornece funcionalidades como desabilitar sugestões automáticas, indicar que sugestões serão exibidas em uma lista, controlar essa lista de sugestões e mostrar um texto de exemplo quando o campo de pesquisa está vazio. Também inclui classes de estilo para aplicar formatação específica e indica que a direção do texto é determinada automaticamente. A função principal é permitir que os usuários interajam com a barra de pesquisa e insiram consultas para buscar conteúdo no YouTube Music.


### Como se relaciona com o javascript?

- O JavaScript é utilizado adicionando um ouvinte de evento para detectar quando o usuário pressiona a tecla Enter após digitar uma consulta de pesquisa. Isso permite que o JavaScript capture a consulta e a envie para o servidor para buscar os resultados.


# Explicação (Botão - Softex Recife)

![PT-BR](https://i.imgur.com/Cx692uC.png)

### Trecho de Código

```HTML
<button _ngcontent-cfi-c315="" mat-flat-button="" class="mat-focus-indicator tooltip mat-flat-button mat-button-base active-button">
  <span class="mat-button-wrapper">
    <div _ngcontent-cfi-c315="" class="tooltip-info ng-star-inserted">
      <div _ngcontent-cfi-c315="" class="tooltip_content">
        <i _ngcontent-cfi-c315="" class="fa-youtube fab oda-icon"></i> Vídeo 1
      </div>
    </div>
    <!----> Atividade anterior
  </span>
  <span matripple="" class="mat-ripple mat-button-ripple"></span>
  <span class="mat-button-focus-overlay"></span>
</button>

```

Este trecho de código representa um botão de interface de usuário com um ícone (representado pela classe "fa-youtube") e o texto "Vídeo 1". Ele também possui classes de estilo para aplicar formatação e efeitos visuais, incluindo a capacidade de exibir uma dica de ferramenta ("tooltip") quando o mouse paira sobre o botão. Esse botão parece estar relacionado a atividades anteriores, e é projetado de acordo com os padrões do Angular Material ("mat-flat-button") com efeitos visuais de foco e animação de toque ("mat-ripple"). Sua função principal é provavelmente permitir que os usuários interajam com algum tipo de atividade ou recurso relacionado a vídeos, conforme indicado pelo ícone "fa-youtube" e o texto "Vídeo 1".


### Como se relaciona com o javascript?

- O JavaScript é utilizado para adicionar um ouvinte de evento ao botão. Um exemplo é a adição de um evento de clique que aciona uma função específica quando o botão é clicado. No caso específico seria retornar a atividade anterior cujo qual é o "Vídeo 1".