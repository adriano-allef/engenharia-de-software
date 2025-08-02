// Funcao que simula a operação de uma calculadora
function calculadora(num1, num2) {
    // Operações aritméticas básicas
    let adicao = num1 + num2; // Adição
    let subtracao = num1 - num2; // Subtração
    let multiplicacao = num1 * num2; // Multiplicação
    let divisao = num1 / num2; // Divisão
    let modulo = num1 % num2; // Módulo
    let exponencial = num1 ** num2; // Exponencial

    // Incremento e Decremento
    // Vamos incrementar num1
    let incrementar = num1;
    incrementar++; // Incrementa num1

    // Vamos decrementar num2
    let decrementar = num2;
    decrementar--; // Decrementa num2


    // Exibindo os resultados no console
    console.log(`Adição (${num1} + ${num2}) = ${adicao}`);
    console.log(`Subtração (${num1} - ${num2}) = ${subtracao}`);
    console.log(`Multiplicação (${num1} * ${num2}) = ${multiplicacao}`);
    console.log(`Divisão (${num1} / ${num2}) = ${divisao}`);
    console.log(`Módulo (${num1} % ${num2}) = ${modulo}`);
    console.log(`Exponencial (${num1} ** ${num2}) = ${exponencial}`);
    console.log(`Incrementar (${num1} ++ ${num2}) = ${incrementar}`);
    console.log(`Decrementar (${num2} -- ${num1}) = ${decrementar}`);
}

// Executando a funcao calculadora
calculadora();
console.log(`\n Exemplo correto de uso: `);
// Nan = Not a Number
calculadora(10, 5); // Exemplo de uso com números