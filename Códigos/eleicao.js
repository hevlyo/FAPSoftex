const readline = require('readline-sync');

const candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0,
};

let votoX = 0;
let votoY = 0;
let votoZ = 0;
let votoBranco = 0;

while (true) {
    console.log('TÁ NA HORA DE VOTAR');
    console.log('Escolha seu voto:\n889 para o candidato X\n847 para o candidato Y\n515 para o candidato Z\n0 para votar branco.');
    const voto = readline.questionInt('');
    if (voto === candidatos.candidato_X) {
        votoX += 1;
        console.log('Voto computado para o candidato X.')
    } else if (voto === candidatos.candidato_Y) {
        votoY += 1;
        console.log('Voto computado para o candidato Y.')
    } else if (voto === candidatos.branco) {
        votoBranco += 1;
        console.log('Voto branco computado.')
    } else if (voto === candidatos.candidato_Z) {
        votoZ += 1;
        console.log('Voto computado para o candidato Z.')
    } else if (isNaN(voto)) {
        console.log('Inseriste um texto, vote novamente.\n');
    } else {
        console.log('Voto inválido, vote novamente.\n');
    }

    const saida = readline.questionFloat('Quer sair da votacao? 1. para sair, 2. para nao\n');
    if (saida === 1) {
        break;
    }
}

function vitorioso() {
    let nomeVencedor = 'Voto Branco'; 
    let maiorVotos = votoBranco;

    if (votoX > maiorVotos) {
        nomeVencedor = 'Candidato X';
        maiorVotos = votoX;
    }

    if (votoY > maiorVotos) {
        nomeVencedor = 'Candidato Y';
        maiorVotos = votoY;
    }

    if (votoZ > maiorVotos) {
        nomeVencedor = 'Candidato Z';
        maiorVotos = votoZ;
    }

    return [nomeVencedor, maiorVotos];
}

const [nomeVencedor, votosVencedor] = vitorioso();

console.log('Resultado da votação:');
console.log('Votos do candidato_X:', votoX);
console.log('Votos do candidato_Y:', votoY);
console.log('Votos do candidato_Z:', votoZ);
console.log('Votos brancos:', votoBranco);
console.log(`O vencedor é o ${nomeVencedor} com ${votosVencedor} votos.`);
