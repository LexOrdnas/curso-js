/*
Primitivos (Imutáveis) - String, number, boolean, undefined, null (bigint, symbol)
Valores Copiados

Refêrencia (Mutável) - Array, object, function
Valores passados por referência
*/

// Exemplo de Referência Mutável
let a = [1, 2, 3];
let b = [...a];
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Alex');
console.log(a, c);



