const nomes = ['Raimundo', 'Pedro', 'Thayna', 'João', 'José', 'Luis', 'Lucas', 'Caio', 'Maria', 'Fernando'];
const idades = [25, 30, 22, 28, 35, 29, 31, 26, 33, 27];
const coresFavoritas = ['Azul', 'Verde', 'Vermelho', 'Roxo', 'Amarelo', 'Laranja', 'Rosa', 'Preto', 'Branco', 'Cinza'];

console.log('Lista original de nomes:', nomes);
console.log('Lista original de idades:', idades);
console.log('Lista original de cores favoritas:', coresFavoritas);

idades[2] = 23;
coresFavoritas[5] = 'Marrom';

console.log('Lista de nomes após as modificações:', nomes);
console.log('Lista de idades após as modificações:', idades);
console.log('Lista de cores favoritas após as modificações:', coresFavoritas);
