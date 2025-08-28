// Criação de strings com nomes de animais
let animais1 = "Elefante";
let animais2 = "Girafa";
let animais3 = "Zebra";

// Exemplo de método de sbstring()
// Pega parte da string 'Elefante', começando no índice 3 até o índice 7
let parteAnimal1 = animais1.substring(3, 7);
console.log("Parte extraída da string 'Elefante':", parteAnimal1);

// Exemplod do método replace()
// Substitui a string 'ra' por 're' na string 'Girafa'
let novoAnimal2 = animais2.replace("ra", "re");
console.log("String após substituição em 'Girafa':", novoAnimal2);

// Exemplo do método concat()
// Concatena as strings 'Elefante', 'Girafa' e 'Zebra' em uma única string
let animaisJuntos = animais1.concat(", ", animais2, ", ", animais3);
console.log("Strings concatenadas:", animaisJuntos);