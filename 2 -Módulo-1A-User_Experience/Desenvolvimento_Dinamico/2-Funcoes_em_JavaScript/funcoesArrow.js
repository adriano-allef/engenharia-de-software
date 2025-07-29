// Arrow functions

// Exemplo básico de uma função arrow que soma dois números
let somar = (a, b) => {
    return a + b;
};

// Chamando a função e exibindo o resultado no console
console.log(somar(5, 3));

// Exemplo de function com um unico parâmetro
let dobrar = n => n * 2;

// Chamando a função dobrar e exibindo o resultado no console
console.log(dobrar(5));

// Exemplo de function usada como callback
let numeros = [1, 2, 3, 4, 5];

// Usando arrow function com o método map para dobrar os valores de um array
let numerosDobrados = numeros.map(n => n * 2);

// Exibindo o resultado do array dobrado no console
console.log(numerosDobrados);

// Arrow function com corpo de função mais complexo
let saudacao = (nome, idade) => {
    let mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
    return mensagem;
}

// Chamando a função saudacao e exibindo o resultado no console
console.log(saudacao("Adriano Allef", 30));