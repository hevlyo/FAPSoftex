const candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0,
};

let votoX = 0;
let votoY = 0;
let votoZ = 0;
let votoNulo = 0;

while (true) {
    const voto = Number(prompt('TÁ NA HORA DE VOTAR\nEscolha seu voto:\n889 para o candidato X\n847 para o candidato Y\n515 para o candidato Z\n0 para votar branco.'));
    if (voto === candidatos.candidato_X) {
        votoX += 1;
    } else if (voto === candidatos.candidato_Y) {
        votoY += 1;
    } else if (voto === candidatos.candidato_Z) {
        votoZ += 1;
    } else if (voto === candidatos.branco) {
        votoNulo += 1;
    } else if (isNaN(voto)) {
        console.log('Inseriste um texto, vote novamente.');
    } else {
        console.log('Voto inválido, vote novamente.');
    }

    const saida = parseInt(prompt('Quer sair da votação? 1. para sair, 2. para não'));
    if (saida === 1) {
        break;
    }
}

function vitorioso() {
  let vencedor = [];
  if (votoX > votoY && votoX > votoZ && votoX > votoNulo) {
        vencedor = ["Candidato X", votoX];
    } else if (votoY > votoZ && votoY > votoNulo) {
        vencedor = ["Candidato Y", votoY];
    } else if (votoZ > votoNulo) {
        vencedor = ["Candidato Z", votoZ];
    } else {
        vencedor = ["Candidato Nulo", votoNulo];
    }
  return vencedor;
}

const vencedor = vitorioso();

console.log('Resultado da votação:');
console.log('Votos do candidato_X:', votoX);
console.log('Votos do candidato_Y:', votoY);
console.log('Votos do candidato_Z:', votoZ);
console.log('Votos brancos:', votoNulo);
console.log(`O vencedor é o ${vencedor[0]} com ${vencedor[1]} votos.`);

