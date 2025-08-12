// Imagina que você está fazendo exercicios físicos para se manter saudável.
// Você decide fazer flexões até ficar cansado.

// Aqui, usaremos um loop "while" para simular esse exercício.

let quantidadeDeFlexoes = 0;
let cansado = false;

while (!cansado) {
    quantidadeDeFlexoes++;
    console.log(`Eu fiz: ${quantidadeDeFlexoes} flexões.`);

    // Simulando que você fica cansado após 10 flexões
    if (quantidadeDeFlexoes === 10) {
        cansado = true;
        console.log("Estou cansado! Vou parar por hoje.");
    }
}