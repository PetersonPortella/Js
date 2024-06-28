/*string, int, float, bolean*/

var nome = 'peterson'

/*

var number = -9 */

var floar = 100.55

var sim = 'true'

/*console.log()
alert()
getSelection()*/

console.log(nome)
console.log(number)

console.log("meu nome é" ,nome, "e eu tenho" ,30, "anos")

/*

var numero = null (é proposital que é null que é igual a não tem valor)
var numero2 = undestnet (que não tem valor  ou esqueceu de colocar o valor)
 */

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

    




