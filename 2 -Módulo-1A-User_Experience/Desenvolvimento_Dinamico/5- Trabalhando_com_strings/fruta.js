// Exemplo de uso do método slice() para extrair partes de uma string
// Temos uma string com várias frutas

let frutas = "maça, banana, laranja, abacaxi, uva";
console.log("Tamanho da string de frutas:", frutas.length);

//Queremos obter uma parte da string, por exemplo, "banana" e "laranja"
let parteFrutas = frutas.slice(6, 12); // "banana"
console.log("Parte extraída da string:", parteFrutas);

// Exemplo de uso do metodo trim() para remover espaços em branco no início e no fim da string
let frutaComEspacos = "   manga   ";

// Queremos remover os espaços em branco
let frutaSemEspacos = frutaComEspacos.trim();
console.log("Fruta sem espaços:", frutaSemEspacos);

// Exemplo de uso do método split() para dividir uma string em um array
let listaDeFrutas = frutas.split("maça, banana, laranja, abacaxi, uva");

// Queremos dividir a string em um array de substrings, usando a vírgula como separador
console.log("Array de frutas:", listaDeFrutas);