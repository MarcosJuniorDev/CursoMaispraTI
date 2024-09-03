// 1 - Verifique se um número é positivo, negativo ou zero

const prompt = require('prompt-sync')()

//let num = Number(prompt("Insira um número: "))

// if (num !== 0)
// {
//     if (num % 2 == 0)
//     {
//         console.log(`${num} é par.`)
//     }
//     else
//     {
//         console.log(`${num} é impar.`)
//     }
// }
// else
// {
//     console.log("O número é 0.")
// }

// //2 - Verifique se um ano é bissexto

// let year = Number(prompt("Insira um ano: "))


// if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
// {
//     console.log(`${year} é bissexto`)
// }
// else
// {
//     console.log(`${year} não é bissexto`)
// }

// 3 - Calcule a média de três números e determine o conceito

// Escreva um programa que leia três notas de um aluno, calcule a média e use uma estrutura if/else para determinar o conceito (A, B, C, D, E, F) baseado na média. Imprima o conceito.

// Dica: A média é a soma das notas dividida por três. Defina os intervalos para cada conceito.

// let note = Number(prompt("Insira a primeira nota: "))
// let note2 = Number(prompt("Insira a segunda nota: "))
// let note3 = Number(prompt("Insira a terceira nota: "))

// let average = (note + note2 + note3) / 3

// if (average <= 1.67)
// {
//     console.log(`A média é ${average}, o conceito é: F`)
// }
// else if ( average > 1.67 && average <= 3.34)
// {
//     console.log(`A média é ${average}, o conceito é: E`)
// }
// else if (average > 3.34 && average <= 5.00)
// {
//     console.log(`A média é ${average}, o conceito é: D`)
// }
// else if (average > 5.00 && average <= 6.68)
// {
//     console.log(`A média é ${average}, o conceito é: C`)
// }
// else if (average > 6.68 && average <= 8.35)
// {
//     console.log(`A média é ${average}, o conceito é: B`)
// }
// else
// {
//     console.log(`A média é ${average}, o conceito é: A`)
// }

// 4 - Verifique se um número é par ou ímpar

// Escreva um programa que leia um número e use uma estrutura  if/else para verificar se o número é par ou ímpar.
// Imprima uma mensagem apropriada.

// let num = Number(prompt("Insira um numero: "))

// if (num % 2 === 0)
// {
//     console.log(`O número ${num} é par`)
// }
// else
// {
//     console.log(`O número ${num} é impar`)
// }

// 5 - Verifique a categoria de um nadador

// Escreva um programa que leia a idade de um nadador e use uma estrutura if/else 
//para determinar a categoria do nadador de acordo com a idade:
//             Infantil A: 5 - 7 anos
//             Infantil B: 8 - 10 anos
//             Juvenil A: 11 - 13 anos
//             Juvenil B: 14 - 17 anos
//             Adulto: 18 anos ou mais

// let age = Number(prompt("Insira a idade do nadador: "))

// if (age < 5)
// {
//     console.log("Idade não permitida")
// }
// else if (age >= 5 && age <= 7)
// {
//     console.log("A categoria do nadador é: Infantil A.")
// }
// else if (age <= 10)
// {
//     console.log("A categoria do nadador é: Infantil B.")
// }
// else if (age <= 13)
// {
//     console.log("A categoria do nadador é: Juvenil A.")
// }
// else if (age <= 17)
// {
//     console.log("A categoria do nadador é: Juvenil B.")
// }
// else
// {
//     console.log("A categoria do nadador é: Adulto.")
// }

// 6 - Verifique o dia da semana
// Escreva um programa que leia um número de 1 a 7 e use uma estrutura switch para imprimir o dia da semana correspondente. (1 =
// Domingo, 2 = Segunda-feira, etc.)

// let weekDay = Number(prompt("Insira o dia da semana: "))

// switch (weekDay)
// {
//     case 1:
//         console.log("Domingo")
//         break;
//     case 2:
//         console.log("Segunda")
//         break;
//     case 3:
//         console.log("Terça")
//         break;
//     case 4:
//         console.log("Quarta")
//         break;
//     case 5:
//         console.log("Quinta")
//         break;
//     case 6:
//         console.log("Sexta")
//         break;
//     case 7:
//         console.log("Sabado")
//         break;        
//     default:
//         console.log("Dia invalido")
// }

// 7 - Calcule o valor de uma expressão matemática simples

// Escreva um programa que leia dois números e um operador (+, -, *, /) e use uma estrutura switch para calcular o resultado da operação.
// Imprima o resultado.

// Dica: Utilize os operadores aritméticos em cada caso do switch.

// let num1 = Number(prompt("Insira o primeiro valor: "))
// let num2 = Number(prompt("Insira o segundo valor: "))
// let operator = prompt("Insira o operador: +,-,* ou /: ")

// switch (operator)
// {
//     case "+":
//         console.log(`${num1} + ${num2} = `, num1 + num2)
//         break;
//     case "-":
//         console.log(`${num1} - ${num2} = `, num1 - num2)
//         break;
//     case "*":
//         console.log(`${num1} * ${num2} = `, num1 * num2)
//         break;
//     case "/":
//         console.log(`${num1} / ${num2} = `, num1 / num2)
//         break;
//     default:
//         console.log("Operador Inválido.")

// }

// 8 - Verifique a estação do ano

// Escreva um programa que leia um número de 1 a 4 e use uma estrutura switch para imprimir 
//a estação do ano correspondente. (1 = Primavera, 2 = Verão, 3 = Outono, 4 = Inverno)

// let season = Number(prompt("Insira o número da estação: 1 - Primavera, 2 - Veral, 3 Outono, 4 - Inverno: "))

// switch (season)
// {
//     case 1:
//         console.log("Primavera")
//         break;
//     case 2:
//         console.log("Verão")
//         break;
//     case 3:
//         console.log("Outono")
//         break;
//     case 4:
//         console.log("Inverno")
//         break;
// }

// 9 - Verifique a faixa etária de uma pessoa
// Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch além bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// let age = Number(prompt("Insira a idade: "))
// let ageGroup = null

// if (age >= 60)
// {
//     ageGroup = "Idoso"
// }
// else if (age >= 18)
// {
//     ageGroup = "Adulto"
// }
// else if (age >= 13)
// {
//     ageGroup = "Adolescente"
// }
// else
// {
//     ageGroup = "Criança"
// }

// switch (ageGroup)
// {
//     case "Criança":
//         console.log("Sua faixa etária é: Criança")
//         break;
//     case "Adolescente":
//         console.log("Sua faixa etária é: Adolescente")
//         break;
//     case "Adulto":
//         console.log("Sua faixa etária é: Adulto")
//         break;
//     case "Idoso":
//         console.log("Sua faixa etária é: Idoso")
//         break;
//     default:
//         console.log("Idade Invalida")
//         break;
// }


// 10 - Calcule o IMC e determine a categoria

// Escreva um programa que leia o peso (kg) e a altura (m) de uma pessoa, calcule o Índice de Massa Corporal (IMC) e use uma estrutura
// if/else para determinar a categoria:
//             Abaixo do peso: IMC < 18.5
//             Peso normal: IMC 18.5 - 24.9
//             Sobrepeso: IMC 25 - 29.9
//             Obesidade grau I: IMC 30 - 34.9
//             Obesidade grau II: IMC 35 - 39.9
//             Obesidade grau III: IMC >= 40
// Dica: O IMC é calculado como peso dividido pela altura ao quadrado (IMC = peso / altura²).

let weight = Number(prompt("Insira seu peso: "))
let height = Number(prompt("Insira sua altura: "))

let imc = weight / (height * height)

if (imc >= 40)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau III.`)
}
else if (imc >= 35)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau II.`)
}
else if (imc >= 30)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Obesidade grau I.`)
}
else if (imc >= 25)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Sobrepeso.`)
}
else if (imc >= 18.5)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Peso Normal.`)
}
else if (imc < 18.5)
{
    console.log(`O valor do seu imc é ${imc.toFixed(2)} e esta na categoria: Abaixo do peso.`)
}