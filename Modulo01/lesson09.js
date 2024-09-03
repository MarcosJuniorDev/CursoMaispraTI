// // 1. Soma dos Elementos de um Array

// let sum = 0
// let arr = [10, 20, 30, 40]

// for (let i = 0; i < arr.length; i++)
// {
//     sum += arr[i]
// }
// console.log(`A soma é ${sum}`)

// reverter o array

// let arr = [10, 20, 30, 40]
// let arr2 = []

// for (let i = arr.length - 1; i >= 0; i--)
// {
//     arr2 = arr[i]
//     console.log(arr2)
// }

//4 criar um novo array contendo apenas os números pares.

// let arr = [1, 2, 8, 3, 4, 5, 6, 7, 8, 9, 8, 10]
// let newArr = []

// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] % 2 === 0)
//     {
//         newArr.push(arr[i])
//     }
    
// }
// console.log(newArr)

//5 contar occorencias de um valor

// let arr = [1, 2, 8, 3, 4, 5, 6, 7, 8, 9, 8, 10]
// let count = 0
// let numeroEscolhido = 8

// for (let i = 0; i < arr.length; i++)
// {
//     if (numeroEscolhido === arr[i])
//     {
//         count++
//     }
// }
// console.log(count)

// matriz

// let matriz =[
//     [1, 2, 3, 7],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for (let i = 0; i < matriz.length; i++)
// {
//     for (let j = 0; j < matriz[i].length; j++)
//     {
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }


// soma Matriz

let matriz =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matriz2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
]

let resultado = []

if (matriz.length !== matriz2.length || matriz[0].length !== matriz2[0].length)
{
    throw new Error("Os arrays devem ter o mesmo tamanho.")
}

for (let linha = 0; linha < matriz.length; linha++)
{
    let somaLinha = []
    for (let coluna = 0; coluna < matriz[linha].length; coluna++)
    {
        somaLinha.push(matriz[linha][coluna] + matriz2[linha][coluna])
    }
    resultado.push(somaLinha)
}

console.table(resultado)






