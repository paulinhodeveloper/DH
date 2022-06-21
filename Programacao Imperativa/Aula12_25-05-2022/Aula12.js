const alicia = [23, 69, 32];
const bob = [12, 67, 43];


// comparar as notas e dar ponto para a maior

let pontosParticipante1 = 0
let pontosParticipante2 = 0

// function compararNotas (nota1, nota2) {
    
//     if (nota1 > nota2 && nota1 != nota2) {
//         pontosParticipante1 = 1
//     } else if (nota2 > nota1 && nota1 != nota2) {
//         pontosParticipante2 = 1
//     } else {
//         pontosParticipante1 = 0
//         pontosParticipante2 = 0
//     }
// }

// incluir em array


function compararNotas (notas1, notas2) {
   for (var index = 0 ; index <= notas1.length ; index++ ) {
        if (notas1[index] > notas2[index] && notas1[index] != notas2[index]) {
            pontosParticipante1 = pontosParticipante1 + 1
        } else if (notas2[index] > notas1[index] && notas1[index] != notas2[index]) {
            pontosParticipante2 = pontosParticipante2 + 1
        } else {
            pontosParticipante1 
            pontosParticipante2 
        }
    }
    console.log (`Alicia recebeu ${pontosParticipante1} ponto(s)`)
    console.log (`Bob recebeu ${pontosParticipante2} ponto(s)`)  
}

console.log (compararNotas(alicia,bob))


function encontrarGanhador (pontos1 , pontos2) {
    if (pontos1 > pontos2) {
        console.log ("O ganhador é Alice")
    } else if (pontos1 == pontos2) {
        console.log ("Temos um empate")
    } else {
        console.log ("O ganhador é Bob")
    }
}

console.log (encontrarGanhador(pontosParticipante1,pontosParticipante2))