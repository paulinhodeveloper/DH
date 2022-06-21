let exercicio1_A = ["Felipe", "Francisco", "Iccaro", "Ivanaldo", "Darlei", "Paulo"]
console.log(exercicio1_A.indexOf("Francisco"))
console.log("------------------------------")

let exercicio1_B = 'Felipe, Francisco, Iccaro, Ivanaldo, Darlei, Paulo';
exercicio1_B.replace('Felipe', 'Pedrinho');
console.log(exercicio1_B);
console.log("------------------------------")


let exercicio1_C = ["Felipe", "Francisco", "Iccaro", "Ivanaldo", "Darlei", "Paulo"]
exercicio1_C.push('Antonio');
console.log(exercicio1_C);
console.log("------------------------------")

let exercicio1_D = ["Felipe", "Francisco", "Iccaro", "Ivanaldo", "Darlei", "Paulo"]
exercicio1_C.slice('Antonio');
console.log(exercicio1_D);
console.log("------------------------------")

let exercicio1_E = ["Felipe", "Francisco", "Iccaro", "Ivanaldo", "Darlei", "Paulo"]
console.log(exercicio1_E.length);
console.log("------------------------------")

//Exercicios 2

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);

let grupoDeAmigos1 = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]];
console.log(grupoDeAmigos1[1][0]);


let str = "una string qualquer"
let grupoDeAmigos2 = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
console.log(grupoDeAmigos2[1][grupoDeAmigos2[2].length - 1]);


//Exercicios 3

const array = [1,2,3,4,5,6];
function reverso(array){
  return array.reverse()
}

console.log(reverso(array))

//B

const array2 = [1,2,3,4,5,6];
function reverso2(array2){
    array2 = [6,5,4,3,2,1]
  return array2 = array2.reverse();
}

console.log(reverso2(array2))


