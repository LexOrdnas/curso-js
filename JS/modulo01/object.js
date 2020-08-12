/*const array = [1, 2, 3];
array.push(4);
array[0] = 'Luiz';
console.log(array);
*/
//-----------------------------------------------------------------------------//
/*
//                        Parametros
function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
//                               Argumentos
const pessoa1 = criaPessoa('Azura', 'Evans', 1000);
const pessoa2 = criaPessoa('Astra', 'Alrius', 18);
const pessoa3 = criaPessoa('Lex', 'Ordnas', 22);
 
console.log(pessoa1.nome, pessoa3.idade);
*/
const pessoa1 = {
    nome: 'Lex',
    sobrenome: 'Ordnas',
    idade: 22,

    fala(){
        console.log(`A minha idade atual é ${this.idade}.`);
    },
    incrementaIdade(){
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();