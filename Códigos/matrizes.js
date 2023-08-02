const animais = [
    // [Nome, Espécie, Idade]
    ['Cachorro', 'Labrador', 3],
    ['Gato', 'Siamês', 2],
    ['Pássaro', 'Canário', 1],
    ['Peixe', 'Beta', 1],
    ['Hamster', 'Sírio', 1]
  ];
  
  console.log('Informações dos animais:');
  console.table(animais);
  
  const indiceAnimal = 2;
  const nomeAnimal = animais[indiceAnimal][0];
  const especieAnimal = animais[indiceAnimal][1];
  const idadeAnimal = animais[indiceAnimal][2];
  
  console.log(`\nInformações do animal no índice ${indiceAnimal}:`);
  console.log(`Nome: ${nomeAnimal}`);
  console.log(`Espécie: ${especieAnimal}`);
  console.log(`Idade: ${idadeAnimal} ano(s)`);
  