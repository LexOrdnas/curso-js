let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*const varX = varA;
varA = varB;
varB = varC;
varC = varX;*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);
