'use strict'

const numeros =  [20,70,131,279,320]

// Acrescentar 100 a cada elemento do array 

//Solução Imperativa
// let numeros100 = []
// for(let i = 0; i < numeros.length; i++){
//     numeros100[i] = numeros[i]+100;
// }
//Solução declarativa
// console.log("numeros:",numeros)
// console.log("numeros mais 100:",numeros100)


//Solução declarativa
//O método map pode se passar três parametros. ELe percorre o array 
//podendo modificar ou não e retornando um novo array de mesmo tamanho
//1º Elemento
//2º Índice
//3º array
const adicionar100 = (numero) => numero + 100
const numeros100 = numeros.map(adicionar100)


console.log("numeros:",numeros)
console.log("numeros mais 100:",numeros100)

//Problema - Criar um novo array com os números menores que 100

//Solução com filter
//O método filter traz uma filtragem da array(temos que passar a confição antes), modificando a nova array. 
//No filter só pode retornar um booleano. Ele retorna uma array de mesmo tamanho ou tamanho inferior ao original
//Ele também passa três parametros
//1º Elemento
//2º Índice
//3º array 

const diminuir100 = (numero) => numero < 100
const menores100 = numeros.filter(diminuir100)

 console.log("Numeros menores que 100:",menores100)

//Solução com for
 let menoresQueCem = []
 let cont = 0
 for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < 100){ 
        menoresQueCem[cont] = numeros[i]  
        cont++  
    }
       
 }
 console.log("menores que cem:",menoresQueCem)

 //Problema somar todos os valores(elementos)
 
 //usando for
 let numerosSomados = 0
 for(let i = 0; i < numeros.length; i++){
    numerosSomados += numeros[i];
}
console.log("numeros somados:", numerosSomados)

//usando reduce 
//Ele também possui quatro parametros
//1º Acumulador
//2º Elemento
//3º Índice
//4º array 
const somar = (numero, numero2) => numero + numero2
const somaTotal = numeros.reduce(somar, 0)

console.log("Total:", somaTotal)

//Array com valores ao quadrado
const elevado = (numero) => numero * numero;
const numeroAoQuadrado = numeros.map(elevado)

console.log("Numeros ao quadrado:", numeroAoQuadrado)

//valores pares
let resto = 0
const pares =  (numero) => numero % 2 == resto
const numerosPares = numeros.filter(pares)

console.log("Numeros pares:", numerosPares)

//Média
const mediaNumeros = numeros.reduce(somar)/numeros.length
console.log("Média:", mediaNumeros)

//soma dos valores impares
const impares = (numero)=> numero % 2 != resto
const numerosImpares = numeros.filter(impares)
const somaTotalImpares = numerosImpares.reduce(somar,0)

console.log("Soma de impares:", somaTotalImpares)

//Valor total com 20% de desconto
const desconto = numeros.reduce(somar) * 0.2
const valorTotalComDesconto = somaTotal - desconto
console.log("Desconto de 20%:", valorTotalComDesconto)