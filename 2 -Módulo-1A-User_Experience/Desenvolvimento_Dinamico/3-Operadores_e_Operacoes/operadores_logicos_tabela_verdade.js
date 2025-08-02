// Operador e lógico (&&) - Tabela Verdade
const a = true;
const b = false;

const resultadoE1 = a && b; // false
const resultadoE2 = a && true; // true

console.log(`true && false: ${resultadoE1}`); // Saída: false
console.log(`true && true: ${resultadoE2}`); // Saída: true

// Operador ou lógico (||) - Tabela Verdade
const resultadoOu1 = a || b; // true
const resultadoOu2 = b || false; // false

console.log(`true || false: ${resultadoOu1}`); // Saída: true
console.log(`false || false: ${resultadoOu2}`); // Saída: false

// Operador não lógico (!) - Tabela Verdade

const resultadoNao1 = !a; // false
const resultadoNao2 = !b; // true

console.log(`!true: ${resultadoNao1}`); // Saída: false
console.log(`!false: ${resultadoNao2}`); // Saída: true

// Combinações de operadores lógicos
const resultadoComb = (a || b) && !b; // true
const resultadoComb2 = !(a && b) || a; // true

console.log(`(true || false) && !false: ${resultadoComb}`) // Saída: true
console.log(`!(true && false) || true: ${resultadoComb2}`) // Saída: true