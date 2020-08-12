const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
/*const texto2 = document.getElementById('texto2');
const texto3 = document.getElementById('texto3');
const texto4 = document.getElementById('texto4');
const texto5 = document.getElementById('texto5');
const texto6 = document.getElementById('texto6');*/

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p>A Raiz quadrada é <strong>${Math.sqrt(numero)}</strong></p>`;
texto.innerHTML += `<p><strong>${numero}</strong> é Inteiro?: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN?: <strong>${Number.isNaN(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para baixo fica: <strong>${Math.floor(numero)}</strong></p>`;
texto.innerHTML += `<p>Arredondando para cima fica: <strong>${Math.ceil(numero)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(2)}</strong></p>`;