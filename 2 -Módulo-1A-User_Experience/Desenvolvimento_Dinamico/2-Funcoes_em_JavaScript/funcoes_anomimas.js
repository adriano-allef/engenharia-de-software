// Declaração de uma variavel chamada resultado e atribuição de uma função anônima a ela
let somarParametros = function(parametro1, parametro2) {
    console.log("Parametro 1: " + parametro1);
    console.log("Parametro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("Resultado da soma: " + resultado);

    return resultado;
};

// Chamando a função anônima através da variável
let resultado = somarParametros(10, 20);
console.log("O resultado da soma é: ", resultado);

//Defininfo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento: ");
    return funcao(valor1, valor2);
}

// Passando a função anônima como argumento para outra função
let resultadoExecucao = executarFuncao(somarParametros, 30, 40);
console.log("Resultado da execução da função passada como argumento: ", resultadoExecucao);

// Definindo a chamada de uma função anônima diretamente
let resultadoImediato = (function(a,b){
    console.log("\nFunção de chamada imediata: ");
    return a + b;
})(4,5);
console.log("Resultado da função de chamada imediata: ", resultadoImediato);