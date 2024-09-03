const prompt = require('prompt-sync')()

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let num = parseInt(prompt("insura um número: ")) 

if (num % 2 == 0)
{
    console.log(`O número ${num} é par.`)
}
else
{
    console.log(`O número ${num} é impar.`)
}

//----------------------------------------------------------------------------------------------------------
// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else

// let age = Number(prompt("Insira a idade: "))

// if (age >= 60)
// {
//     console.log("Idoso.")
// }
// else if (age >= 18)
// {
//     console.log("Adulto.")
// }
// else if (age >= 13)
// {
//     console.log("Adolescente.")
// }
// else
// {
//     console.log("Criança.")
// }

//----------------------------------------------------------------------------------------------------------
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let grade = Number(prompt("Insira a nota do aluno: "))

// if (grade >= 7.0)
// {
//     console.log("Aprovado.")
// }
// else if (grade >= 3.5)
// {
//     console.log("Recuperação.")
// }
// else
// {
//     console.log("Reprovado.")
// }


//----------------------------------------------------------------------------------------------------------
// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// let option = prompt("Insira a opção A, B ou C: ")

// switch (option) {
//     case "A":
//     case "a":
//         console.log("Você escolheu a opção A.")
//         break;
//     case "B":
//     case "b":
//         console.log("Você escolheu a opção B.")
//         break;
//     case "C":
//     case "c":
//         console.log("Você escolheu a opção C.")
//         break;
//     default:
//         console.log("Opção inválida.")
//         break;
// }

//----------------------------------------------------------------------------------------------------------
// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let weight = Number(prompt("Insira seu peso: "))
// let height = Number(prompt("Insira sua altura: "))

// let imc = weight / (height * height)

// if (imc >= 40)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau III.`)
// }
// else if (imc >= 35)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau II.`)
// }
// else if (imc >= 30)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau I.`)
// }
// else if (imc >= 25)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Sobrepeso.`)
// }
// else if (imc >= 18.5)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Peso Normal.`)
// }
// else if (imc < 18.5)
// {
//     console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Abaixo do peso.`)
// }

//----------------------------------------------------------------------------------------------------------
// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.

// let sideA = Number(prompt("Insira o o valor do lado A: "))
// let sideB = Number(prompt("Insira o o valor do lado B: "))
// let sideC = Number(prompt("Insira o o valor do lado C: "))

// if ((sideA + sideB) > sideC && (sideA + sideC) > sideB && (sideB + sideC) > sideA)
// {
//     if (sideA == sideB && sideA == sideC)
//     {
//         console.log("Este é um triangulo eqüilátero.")
//     }
//     else if (sideA == sideB || sideA == sideC || sideB == sideC)
//     {
//         console.log("Este é um triangulo Isósceles.")
//     }
//     else
//     {
//         console.log("Este é um triangulo escaleno.")
//     }
// }
// else
// {
//     console.log("Este não é um triangulo.")
// }

//----------------------------------------------------------------------------------------------------------
// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra

// let qtdApple = parseInt(prompt("Insira a quantidade de maças compradas: "))
// let value = 0

// if (qtdApple >= 12)
// {
//     value = qtdApple * 0.25
// }
// else
// {
//     value = qtdApple * 0.3
// }

// console.log(`Você comprou ${qtdApple} maças e o valor total da compra ficou em: R$${value.toFixed(2)}`)

//----------------------------------------------------------------------------------------------------------
// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let value1 = Number(prompt("Insira o primeiro valor: "))
// let value2 = Number(prompt("INsira o segundo valor: "))

// if (value1 > value2)
// {
//     console.log(value2, value1)
// }
// else
// {
//     console.log(value1, value2)
// }

//----------------------------------------------------------------------------------------------------------
// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for

// let count = 1

// for (let i = 10; i >= count; i--)
// {
//     console.log(i)
// }

//----------------------------------------------------------------------------------------------------------
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let num = parseInt(prompt("Insira o um valor inteiro: "))

// for (let i = 1; i <= 10; i++)
// {
//     console.log(num)
// }

//----------------------------------------------------------------------------------------------------------
// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let num
// let value = 0

// for (let i = 1; i <= 5; i++)
// {
//     num = Number(prompt(`Insira o valor ${i}: `))
//     value += num
// }

// console.log(`O valor total é ${value}`)

//----------------------------------------------------------------------------------------------------------
// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

// let num = parseInt(prompt("Insira o número para tabuada: "))

// for (let i = 1; i <= 10; i++)
// {
    
//     console.log(`${num} x ${i}:`, num * i)
// }

//----------------------------------------------------------------------------------------------------------
// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

// let condition = false
// let count = 0
// let num = 0
// let avg = 0

// while (condition === false)
// {
//     num = Number(prompt("Insira o valor: "))
//     if (num != 0)
//     {
//         avg += num
//         count++
//     }
//     else
//     {
//         condition = true
//     }    
// }
// console.log(`A média dos valores é :`, avg / count)

//----------------------------------------------------------------------------------------------------------
// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let num = parseInt(prompt("Insira o número para fatorial: "))
// let factorial = num - 1

// while (factorial > 0)
// {
//     num *= factorial
//     factorial--
// }
// console.log(num)
//----------------------------------------------------------------------------------------------------------

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let num1 = 0
// let num2 = 1

// console.log(num1)
// console.log(num2)

// let nextNumber = 0

// for (let i = 2; i < 10; i++)
// {
//     nextNumber = num1 + num2
//     console.log(nextNumber)
//     num1 = num2
//     num2 = nextNumber
// }