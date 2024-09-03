// console.log("Hello World!")
// console.log("Hail")
// console.log(typeof('1'), 1000, "true")

// let usuario = "marcos"
// let senha = 123456

// console.log(usuario === "marcos" && senha === 123456)

// let idade = 30

// if (idade >= 18 && idade <= 32)
// {
//     console.log("Pode realizar o concurso")
// }
// else
// {
//     console.log("Não pode realizar o concurso")
// }

//exercício 1
// let number = 668

// let result = (number % 2 == 0) ? console.log("Par") : console.log("Impar")

//exercício 2
// let number1 = 35
// let number2 = 25
// let number3 = 20

// if (number1 > number2 && number1 > number3)
// {
//     console.log("O maior número é: ",number1)
// }
// else if (number2 > number1 && number2 > number3)
// {
//     console.log("O maior número é: ",number2)
// }
// else
// {
//     console.log("O maior número é: ", number3)
// }

//exercício 3

const prompt = require('prompt-sync')()

let num1 = Number(prompt("Insira o primeiro valor: "))
let num2 = Number(prompt("Insira o segundo valor: "))
let operation = prompt("Informe a peração desejada (+, -, /, *): ")
let result = 0
if (operation === "+")
{
    result = num1 + num2
}
else if (operation === "-")
{
    result = num1 - num2
}
else if (operation === "*")
{
    result = num1 * num2
}
else if (operation === "/")
{
    if(num2 !== 0)
    {
        result = num1 / num2
    }
    else
    {
        console.log("Erro divisão por zero")
        result = undefined
    }
}
else
{
    console.log("Operação Invalida")
    result = undefined
}

if (result !== undefined)
{
    console.log("Resultado: ", result)
}