//Exercício 1

function MaiorMenor(n1, n2, n3) {
  if (n1 > n3 && n1 > n2) {
    console.log(n1 + ' ' + 'e o maior Numero!');
  }
  else if (n3 > n1 && n3 > n2) {
    console.log(n3 + ' ' + 'e o maior Numero!');
  }
  else if
    (n2 > n3 && n2 > n1) {
    console.log(n2 + ' ' + 'e o maior Numero!');
  }

  else (
    console.log('Atenção! Existe doi valores iguais')
  )
}
console.log(MaiorMenor(30, 20, 70));


//Exercício 2

function DoarSangue(idade) {

  if (idade >= 18 && idade <= 67) {
    console.log(idade + ' ' + 'Pode doar Sangue!');
  }
  else {
    console.log(idade + ' ' + 'Não pode doar Sangue!');
  }
}
console.log(DoarSangue(18));

function verificaNegativoPositivo(valor) {
  if (valor < 0) {
    console.log(valor + ' ' + 'O numero é negativo');
  } else {
    console.log(valor + ' ' + 'O numero é Positivo');
  }
}
console.log(verificaNegativoPositivo(-1));


//Exercício 3

function aprovaAluno(nota1, nota2) {

  resultado = (nota1 + nota2) / 2;

  if (resultado == 10) {
    console.log(resultado + ' ' + '- Aluno Aprovado com Distição!');
  }
  else if (resultado >= 7.0 && resultado <= 9.0) {
    console.log(resultado + ' ' + '- Aluno Aprovado');
  }
  else if
    (resultado >= 0 && resultado <= 7.0) {
    console.log(resultado + ' ' + '- Aluno Reprovado');
  }

  else (
    console.log(resultado + ' ' + 'Atenção! Verifique os valores informado')
  )
}
console.log(aprovaAluno(6, 5));

