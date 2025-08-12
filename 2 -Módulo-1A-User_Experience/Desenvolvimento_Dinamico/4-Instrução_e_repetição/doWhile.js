// Imagine que você está tentando aprender a andar de bicicleta.
// Você decide praticar até conseguir andar por pelo menos 1 minuto sem cair.

// Aqui, usaremos um loop "do...while" para simular essa prática.

let tempoDeAndar = 0;
let caiu = false;

do {
    tempoDeAndar++;
    console.log(`Eu andei de bicicleta por ${tempoDeAndar} minutos.`);

    if (tempoDeAndar === 5) {
        caiu = true;
        console.log("Eu caí! Vou tentar novamente amanhã.");
    }
} while (!caiu && tempoDeAndar < 10);