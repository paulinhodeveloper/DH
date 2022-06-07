
Ex1 = (num1, num2) => {
    for (let i = 1; i <= 100; i++) {
        if (i % num1 == 0 && i % num2 !== 0) {
            console.log(i + ' - Fizz');
        } else if (i % num1 == 0 && i % num2 !== 0) {
            console.log(i + ' - Buzz');
        } else if (i % num1 == 0 && i % num2 == 0) {
            console.log(i + ' - FizzBuzz');
        }
    }
}

console.log(Ex1(1, 2));


function fatorialComFor(valor1) {
    let resultado = 1;
    for (let i = valor1; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorialComFor(5));


const fatorialSemFor = valor2 => {
    if (valor2 > 1) {
        return valor2 * fatorialSemFor(valor2 - 1)
    }
    return valor2
}

console.log(fatorialSemFor(5))