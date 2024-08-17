//string, int, float, bolean*/

var nome = 'peterson'

var number = -9 */

var float = 100.55

var sim = 'true'

//console.log()
//alert()
//getSelectionById()

console.log(nome)
console.log(number)

console.log("meu nome é" ,nome, "e eu tenho" ,30, "anos")

//var numero = null (é proposital que é null que é igual a não tem valor)
//var numero2 = undestnet (que não tem valor  ou esqueceu de colocar o valor)

var nota = prompt('digite a nota final:')

var media = 7

if ( nota >= media ){
   document.write('Aprovado')
} else {
   document.write('Reprovado')
}

if ( '3' === 3){
    documet.write( 'verdadeiro')
} else {
    documet.write( 'falso')
}

var nota = 10
var media = 7

if ( nota >= media || 2 == 2 ){
   document.write('Aprovado')
} else {
   document.write('Reprovado')
}

if ( nota >= media && 3 == 2 ){
    document.write('Aprovado')
 } else {
    document.write('Reprovado')
 }

//abaixo faz a troca de sim para não
if (!(3 == 2( ){
    document.write('Aprovado')
 } else {
    document.write('Reprovado')
 }

//CASTING
//para somar string para 
var variavel1 = prompt("digite um numero:")
var variavel2 = prompt("digite outro numero:")

variavel1 = parseInt(variavel1)
variavel2 = parseFloat(variavel2)

document.write(variavel1 + variavel2)

// para concatenar alguma int ou float
var variavel1 = 20
var variavel2 = 10

document.write(variavel1.toString() + variavel2.toString())

//nunca somar ou concatenar uma string com numero, da merda
const var int // 3 variaveis ex: var nomeCompleto= (nome + sobrenome)
//
    
//3 variaveis 
var, let , const

//operadores aritimeticos, matematicos, atribuição,ternario 
( + - * / = ++ -- += -= && || !)

//FUNCTION
   function Quadro (valor1, valor2){
     return 10 + valor1 + valor2;
}

var sim = 50;
var não = 40;

var total = Quadro(sim,não);

alert('resultado foi' + total);

function Quadro(valor1,valor2){
    return 10 + valor1 + valor2;
}

var sim = 50;
var nao = 40;

var total = Quadro(sim,nao);

document.getElementById("teste").innerHTML= total;

//DECLARAÇÕES
1° let a, b, c;
2° a=5;
3° b=6;
4° c=5;
// 4 declarações

//SENTAXE
//são basicamentes os nomes da variaveis, ou comando de function, sempre escrever do mesmo jeito, AA AA ou Cisco ai vai ser Cisco, sempre com _ e nunca com - hifem, sempre fazer 'assimFazer' nunca 'fazerassim'

//OBJETOS
const carrro = { //carro = OBJETO
   marca:"ford"; //PROPRIEDADES
   modelo:"ka"; //PROPRIEDADES
   ano: 2000; //PROPRIEDADES
}
console.log(carro.modelo); //vai aparecer ka

// 



