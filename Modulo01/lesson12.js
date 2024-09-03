//Objetos.

// let serie = {
//     nome: "The Boys",
//     genero: ["Ação", "parodia", "heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },
    
//     mostrarCaracteristicas: function() {
//         return `O nome da série é: ${this.nome}, e sua classificação é: ${this.classificacao}`       
//     }

// }

// let livro = {
//     titulo: "Stormlight Achive",
//     autor: "Brandon Sanderson",
//     ano: 2004,
//     mostrarCaracteristicas: function() {
//         return `${this.titulo} foi escrito por ${this.autor}`       
//     }
    
   
// }


// console.log(livro.mostrarCaracteristicas())

// let carro = {
//     nome: "Herby",
//     modelo: "Marea",
//     velocidadeMaxima: 350,
//     anoe: 2005,
//     acelerar: function(){
//         return "Acelerando com pé no porão"
//     }
// }

// console.log(carro)
// console.log(carro.acelerar())

function computador (processador, gpu, ram, armazenamento)
{
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function()
    {
        return `O ${this.processador} esta funcionando!`
    }

    this.mostrarEspecificacoes = function ()
    {
        return `Processador: ${this.processador}
                     Gpu: ${this.gpu}
                     Ram: ${this.ram}
                     Armazenamento: ${this.armazenamento}`
    }
}

let pc = new computador("I9", "RTX4090", "16GB", "500GB SSD")

// console.log(pc.mostrarEspecificacoes())

function jogos(titulo, genero, anoLancamento, empresa, jogar)
{
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Enix", () => console.log("Jogando"))

// console.log(jogo1.jogar())

for (let key in jogo1)
{
    //console.log(`${key}: ${jogo1[key]}`)
}

