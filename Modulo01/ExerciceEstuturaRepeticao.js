const prompt = require('prompt-sync')()

// 1 - Imprima a sequência de Fibonacci até o 10º termo

// Escreva um programa que use um loop for para imprimir os primeiros 10 termos da sequência de Fibonacci. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34)

// Dica: A sequência de Fibonacci é calculada somando os dois termos anteriores para obter o próximo termo.

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
//----------------------------------------------------------------------------------------------------------
// 2 - Verifique se um número é primo
// Escreva um programa que use um loop for para verificar se um número fornecido (por exemplo, 29) é primo.
// Imprima "É primo" ou "Não é primo".

// Dica: Um número primo só é divisível por 1 e por ele mesmo.

// let numeroDigitado = Number(prompt("Digite o número para verificar se é primo: "))
// let divisor = 2
// while (numeroDigitado % divisor != 0)
// {
//     divisor++
// }
// if (numeroDigitado == divisor)
// {
//     console.log("Número Primo!")
// }
// else
// {
//     console.log("Número NÃO primo!")
// }

//----------------------------------------------------------------------------------------------------------
// 3 - Imprima um triângulo de números

// Escreva um programa que use um loop for para imprimir um triângulo de números.

// Dica: Utilize dois loops for, um dentro do outro.

// let lineNumber = 5


// for (let i = 1; i <= lineNumber; i++)
// {   
//     let count = '' 
//     for (let j = 1; j <= i; j++)
//     {
//         count += j
//     }
//     console.log(count)
// }

//----------------------------------------------------------------------------------------------------------
// 4 - Calcule o fatorial de um número

// Escreva um programa que use um loop while para calcular o fatorial de um número fornecido (por exemplo, 5). O fatorial de 5 (5!) é 120.

// Dica: O fatorial de n (n!) é o produto de todos os números de 1 a n.

// let num = Number(prompt("Digite um número: "))
// let fatorial = 1

// while (num > 0)
// {
//     fatorial *= num
//     num--
// }
// console.log(`O fatorial é: ${fatorial}`)

//----------------------------------------------------------------------------------------------------------

// 5 - Inverta os dígitos de um número

// Escreva um programa que use um loop while para inverter os dígitos de um 
//número fornecido (por exemplo, 1234 deve ser impresso como 4321).

// let number = Number(prompt("Insira o número: "))
// let invertido = 0

// while (number > 0) 
// {
//     let digito = number % 10 
//     invertido = invertido * 10 + digito
//     number = parseInt(number / 10) 
// }

// console.log(`"Número invertido é: ${invertido}`)

//----------------------------------------------------------------------------------------------------------

// 6 - Verifique se um número é palíndromo

// Escreva um programa que use um loop while para verificar se um número fornecido (por exemplo, 121) 
// é um palíndromo. Um número é palíndromo se ele é igual ao seu reverso.

// let number = Number(prompt("Insira o número: "))
// let invertido = 0
// let saveNumber = number

// while (number > 0) 
// {
//     let digito = number % 10 
//     invertido = invertido * 10 + digito
//     number = parseInt(number / 10) 
// }

// if (saveNumber === invertido)
// {
//     console.log(`O número ${saveNumber} é um palídromo.`)
// }
// else
// {
//     console.log(`O número ${saveNumber} não é um palídromo.`)
// }

//----------------------------------------------------------------------------------------------------------

// 7 - Conte o número de dígitos de um número

// Escreva um programa que use um loop do while para contar o 
// número de dígitos de um número fornecido (por exemplo, 12345 tem 5 dígitos).

// Dica: Use operações de divisão para reduzir o número até que ele seja zero.
//OBS: não sei se não era permitido fazer convertendo o número para string mas tentei fazer dessa forma para testar no js.

// let number = prompt("Insira o numero: ")
// let count = 0

// while (count < number.length)
// {
//     count++
// }
// console.log(count)

//----------------------------------------------------------------------------------------------------------

// 8 - Calcule a soma dos dígitos de um número
       
// Escreva um programa que use um loop do while para calcular a soma dos
//  dígitos de um número fornecido (por exemplo, a soma dos dígitos de 1234 é 10).

// Dica: Use operações de módulo para extrair os dígitos e depois some-os.

// let number = prompt("Insira o número desejado: ")
// let count = 0
// let result = 0

// while (count < number.length)
// {
//     result += Number(number[count])
//     count++
// }
// console.log(`A soma dos digitos ${number} é : ${result}`)

//----------------------------------------------------------------------------------------------------------
// 9 - Imprima um padrão de estrela decrescente

// Escreva um programa que use um loop do while para imprimir um padrão de estrelas decrescente.

// Dica: Utilize dois loops, um dentro do outro.

// let lineNumber = 5
// let count = lineNumber
// do
// {
//     let result = '' 
//     for (let i = count; i > 0; i--)
//     {   
//         result += "*"         
//     }
//     console.log(result)
//     count--
// }
// while (count > 0)


// for (let i = lineNumber.length; i > 0; i--)
// {   
//     let count = '' 
//     for (let j = i; j > 0; j--)
//     {
//         count += "*"
//     }
//     console.log(count)
// }

//----------------------------------------------------------------------------------------------------------
// 10 - Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar 
// o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir 
// o maior número pela diferença dos dois números até que ambos sejam iguais.

let num1 = Number(prompt("Insira o primeiro valor: "))
let num2 = Number(prompt("Insira o segundo valor: "))
if (num1 < num2)
{
    let troca = num1
    num1 = num2
    num2 = troca
}
do
{
   
    let resto = num1 % num2
    num1 = num2
    num2 = resto

}while (num2 !== 0)

console.log(`O MDC é ${num1}`)