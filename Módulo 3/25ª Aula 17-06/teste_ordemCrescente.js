
const readline = require('readline')

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

let numeros = []

iniciarPrograma()

function iniciarPrograma(){

    console.log(`
|=============================|
|
|
|
|
    `)

    rl.question(`Deseja rodar o programa? `,(inicio)=>{

        inicio = parseInt(inicio)

        switch(inicio){
            case 1:
            break
            case 2:
            rl.close()
            break
            default:
                console.log(`Opção inválida.`)
                console.log()
                iniciarPrograma()
            break
        }
    })
}

function crescente(){

}

function decrescente(){

}

