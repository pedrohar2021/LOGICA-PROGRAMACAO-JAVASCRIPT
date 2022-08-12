const prompt = require('prompt-sync')();
console.clear();
console.log('Bem vindos ao Jogo da Velha');
console.log();
let tabuleiro = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
let escolhas = [];
let jogadores = [];
let placarPlayer1 = 0;
let placarPlayer2 = 0;
let placarVelha = 0;
let ganhar = false;
let novaRodada;
const nomes = () => {
    let player1 = prompt('Qual o nome do jogador(a) 1: ');
    console.log();
    let player2 = prompt('Qual o nome do jogador(a) 2: ');
    console.log();
    console.log(`O jogador(a) ${player1} joga com X`);
    console.log();
    console.log(`O jogador(a) ${player2} joga com O`);
    let players = [player1, player2];
    return players;
};
const marcacaoTabuleiro = (jogadaPlayer, player, tabuleiro) => {
    if (player == 1) {
        if (jogadaPlayer == 1) {
            tabuleiro[0].splice(0, 1, 'X');
        } else if (jogadaPlayer == 2) {
            tabuleiro[0].splice(1, 1, 'X');
        } else if (jogadaPlayer == 3) {
            tabuleiro[0].splice(2, 1, 'X');
        } else if (jogadaPlayer == 4) {
            tabuleiro[1].splice(0, 1, 'X');
        } else if (jogadaPlayer == 5) {
            tabuleiro[1].splice(1, 1, 'X');
        } else if (jogadaPlayer == 6) {
            tabuleiro[1].splice(2, 1, 'X');
        } else if (jogadaPlayer == 7) {
            tabuleiro[2].splice(0, 1, 'X');
        } else if (jogadaPlayer == 8) {
            tabuleiro[2].splice(1, 1, 'X');
        } else if (jogadaPlayer == 9) {
            tabuleiro[2].splice(2, 1, 'X');
        }
    } else if (player == 2) {
        if (jogadaPlayer == 1) {
            tabuleiro[0].splice(0, 1, 'O');
        } else if (jogadaPlayer == 2) {
            tabuleiro[0].splice(1, 1, 'O');
        } else if (jogadaPlayer == 3) {
            tabuleiro[0].splice(2, 1, 'O');
        } else if (jogadaPlayer == 4) {
            tabuleiro[1].splice(0, 1, 'O');
        } else if (jogadaPlayer == 5) {
            tabuleiro[1].splice(1, 1, 'O');
        } else if (jogadaPlayer == 6) {
            tabuleiro[1].splice(2, 1, 'O');
        } else if (jogadaPlayer == 7) {
            tabuleiro[2].splice(0, 1, 'O');
        } else if (jogadaPlayer == 8) {
            tabuleiro[2].splice(1, 1, 'O');
        } else if (jogadaPlayer == 9) {
            tabuleiro[2].splice(2, 1, 'O');
        }
    }
    return tabuleiro;
};
const verificaGanhador = (tabuleiro, player) => {
    if (player == 1) {
        if (
            tabuleiro[0][0] == 'X' &&
            tabuleiro[0][1] == 'X' &&
            tabuleiro[0][2] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[1][0] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[1][2] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[2][0] == 'X' &&
            tabuleiro[2][1] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[0][0] == 'X' &&
            tabuleiro[1][0] == 'X' &&
            tabuleiro[2][0] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[0][1] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][1] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[0][2] == 'X' &&
            tabuleiro[1][2] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[0][0] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][2] == 'X'
        ) {
            return true;
        } else if (
            tabuleiro[0][2] == 'X' &&
            tabuleiro[1][1] == 'X' &&
            tabuleiro[2][0] == 'X'
        ) {
            return true;
        } else {
            return false;
        }
    } else if (player == 2) {
        if (
            tabuleiro[0][0] == 'O' &&
            tabuleiro[0][1] == 'O' &&
            tabuleiro[0][2] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[1][0] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[1][2] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[2][0] == 'O' &&
            tabuleiro[2][1] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[0][0] == 'O' &&
            tabuleiro[1][0] == 'O' &&
            tabuleiro[2][0] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[0][1] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][1] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[0][2] == 'O' &&
            tabuleiro[1][2] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[0][0] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][2] == 'O'
        ) {
            return true;
        } else if (
            tabuleiro[0][2] == 'O' &&
            tabuleiro[1][1] == 'O' &&
            tabuleiro[2][0] == 'O'
        ) {
            return true;
        } else {
            return false;
        }
    }
};
jogadores = nomes();
console.log();
console.log(`Vamos começar a jogar. Estão preparados ${jogadores} ?`);
prompt();
console.log();
jogo: while (true) {
    console.clear();
    console.table(tabuleiro);
    console.log();
    let jogadaPlayer1 = +prompt(`${jogadores[0]} onde deseja jogar? `);
    while (
        escolhas.indexOf(jogadaPlayer1) != -1 ||
        (jogadaPlayer1 != 1 &&
            jogadaPlayer1 != 2 &&
            jogadaPlayer1 != 3 &&
            jogadaPlayer1 != 4 &&
            jogadaPlayer1 != 5 &&
            jogadaPlayer1 != 6 &&
            jogadaPlayer1 != 7 &&
            jogadaPlayer1 != 8 &&
            jogadaPlayer1 != 9)
    ) {
        if (escolhas.indexOf(jogadaPlayer1) != -1) {
            console.log('Essa posição já foi prenchida...');
        } else {
            console.log('Essa posição é invalida');
        }
        jogadaPlayer1 = +prompt(`${jogadores[0]} onde deseja jogar? `);
    }
    escolhas.push(jogadaPlayer1);
    marcacaoTabuleiro(jogadaPlayer1, 1, tabuleiro);
    ganhar = verificaGanhador(tabuleiro, 1);
    console.clear();
    console.table(tabuleiro);
    console.log();
    if (ganhar) {
        placarPlayer1++;
        console.log(`O jogador ${jogadores[0]} ganhou dessa vez.`);
        console.log();
        console.log(
            `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
        );
        novaRodada = prompt('Desejam jogar novamente? ');
        if (novaRodada == 'sim') {
            tabuleiro = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            escolhas = [];
            ganhar = false;
            novaRodada;
            continue jogo;
        } else {
            break jogo;
        }
    } else if (escolhas.length == 9) {
        placarVelha++;
        console.log(`DEU VELHA`);
        console.log();
        console.log(
            `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
        );
        novaRodada = prompt('Desejam jogar novamente? ');
        if (novaRodada == 'sim') {
            tabuleiro = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            escolhas = [];
            ganhar = false;
            novaRodada;
            continue jogo;
        } else {
            break jogo;
        }
    }
    let jogadaPlayer2 = +prompt(`${jogadores[1]} onde deseja jogar? `);
    while (
        escolhas.indexOf(jogadaPlayer2) != -1 ||
        (jogadaPlayer2 != 1 &&
            jogadaPlayer2 != 2 &&
            jogadaPlayer2 != 3 &&
            jogadaPlayer2 != 4 &&
            jogadaPlayer2 != 5 &&
            jogadaPlayer2 != 6 &&
            jogadaPlayer2 != 7 &&
            jogadaPlayer2 != 8 &&
            jogadaPlayer2 != 9)
    ) {
        if (escolhas.indexOf(jogadaPlayer2) != -1) {
            console.log('Essa posição já foi prenchida...');
        } else {
            console.log('Essa posição é invalida');
        }
        jogadaPlayer2 = +prompt(`${jogadores[1]} onde deseja jogar? `);
    }
    escolhas.push(jogadaPlayer2);
    marcacaoTabuleiro(jogadaPlayer2, 2, tabuleiro);
    ganhar = verificaGanhador(tabuleiro, 2);
    console.clear();
    console.table(tabuleiro);
    console.log();
    if (ganhar) {
        placarPlayer2++;
        console.log(`O jogador ${jogadores[1]} ganhou dessa vez.`);
        console.log();
        console.log(
            `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
        );
        novaRodada = prompt('Desejam jogar novamente? ');
        if (novaRodada == 'sim') {
            tabuleiro = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            escolhas = [];
            ganhar = false;
            novaRodada;
            continue jogo;
        } else {
            break jogo;
        }
    } else if (escolhas.length == 9) {
        placarVelha++;
        console.log(`DEU VELHA`);
        console.log();
        console.log(
            `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
        );
        novaRodada = prompt('Desejam jogar novamente? ');
        if (novaRodada == 'sim') {
            tabuleiro = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
            ];
            escolhas = [];
            ganhar = false;
            novaRodada;
            continue jogo;
        } else {
            break jogo;
        }
    }
}
if (placarPlayer1 > placarPlayer2) {
    console.clear();
    console.log(`O jogador ${jogadores[0]} foi o grande campeão.`);
    console.log();
    console.log(
        `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
    );
} else if (placarPlayer2 > placarPlayer1) {
    console.clear();
    console.log(`O jogador ${jogadores[1]} foi o grande campeão.`);
    console.log();
    console.log(
        `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
    );
} else {
    console.clear();
    console.log(`DEU VELHA.`);
    console.log();
    console.log(
        `O placar ficou: \n${jogadores[0]} ganhou: ${placarPlayer1};\n${jogadores[1]} ganhou: ${placarPlayer2}; \nDeu velha: ${placarVelha};`,
    );
}