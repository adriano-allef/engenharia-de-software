// Exemplo de uso de var, let e const em JavaScript
const externo = "Olá, eu uma constante global";

//Declaração de uma variável usando var 
function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! EU sou uma var...";
    }
    console.log(mensagem);
}

// Chamada da função exemploVar
exemploVar();

// Exemplo de erro e correção
var mensagem = "Olá, Faculdade Descomplica! Escopo externo!";
console.log(mensagem);

// Chamando a função exemplo Let
function exemploLet() {
    if (true) {
        let mensagem = "Olá, Faculdade Descomplica! EU sou uma let...";
        console.log(mensagem);
        
    }
    //console.log(mensagem);
}

// Chamada da função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "Olá, Faculdade Descomplica! Escopo externo!";
console.log(mensagem);

// Exemplo de uma constante usando uma const
function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! EU sou uma constante...";
    console.log(mensagem);
}

// Chamada da função exemploConstante
exemploConstante();

// Exemplo externo de const
console.log(externo);

//exemplo externo tentar alterar uma constante
//externo = "Nova mensagem"; // Isso causaria um erro, pois 'externo' é uma constante