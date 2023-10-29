let vitorias = 100
let derrotas = 2
let rank = caucular(vitorias, derrotas)
function caucular(vitorias, derrotas){
    let saldoDeVitorias = vitorias - derrotas
    let nivel

    if (saldoDeVitorias<=10){
    nivel = "Ferro"
    }else if (saldoDeVitorias>=11 && saldoDeVitorias<=20){
    nivel = "Bronze"
    }else if (saldoDeVitorias>=21 && saldoDeVitorias<=50){
    nivel = "Prata"
    }else if (saldoDeVitorias>=51 && saldoDeVitorias<=80){
    nivel = "Ouro"
    }else if (saldoDeVitorias>=81 && saldoDeVitorias<=90){
    nivel = "Diamante"
    }else if (saldoDeVitorias>=91 && saldoDeVitorias<=100){
    nivel = "Lendário"
    }else if (saldoDeVitorias>=101){
    nivel = "Imortal"
    }
    return "O Herói tem de saldo de " + saldoDeVitorias + " está no nível de " + nivel
}
console.log(rank)