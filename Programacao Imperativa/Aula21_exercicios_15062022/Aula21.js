
function Aluno(NOME, SEXO, ID, NOTAS, TURMA) {
    this.NOME = NOME;
    this.SEXO = SEXO;
    this.ID = ID;
    this.NOTAS = NOTAS;
    this.TURMA = TURMA;
    this.media = function media(){
        let media = this.notas.reduce( function(acumulador, item ){
               return acumulador + item;
           } );
           media = media / this.notas.length;
           return media.toFixed(2);
       }
};

const fichaAlunos = [];

fichaAlunos.push(Fulado = new Aluno("Fulano", "M", "ID_1023", [10, 8, 9, 7], 10));
fichaAlunos.push(Beltrano = new Aluno("Beltrano", "F", "ID_1085", [5, 7, 10, 10], 10));
fichaAlunos.push(Ciclano = new Aluno("Ciclano", "F", "ID_1015", [9, 7, 10, 6], 10));

console.log(" Nome do Aluno é: " + Fulado.NOME + " De ID: " + Fulado.ID + " Do Sexo: " + Fulado.SEXO + " é da Turma: " + Fulado.TURMA + " Posssui as notas: " + Fulado.NOTAS);
console.log(" Nome do Aluno é: " + Beltrano.NOME + " De ID: " + Beltrano.ID + " Do Sexo: " + Beltrano.SEXO + " é da Turma: " + Beltrano.TURMA + " Posssui as notas: " + Beltrano.NOTAS)
console.log(" Nome do Aluno é: " + Ciclano.NOME + " De ID: " + Ciclano.ID + " Do Sexo: " + Ciclano.SEXO + " é da Turma: " + Ciclano.TURMA + " Posssui as notas: " + Ciclano.NOTAS)

function somar() {
    let soma = 0
    for(let i in fichaAlunos.NOTAS.length) {
      soma += fichaAlunos.NOTAS[i]
    }
    return soma
  }

  console.log(somar())

  let mediaNotaAlunos = obj => {
    let arrayMedias = obj.map(e => e.media());
    let somaMedias = 0;
    for (let i = 0; i < arrayMedias.length; i++) {
        somaMedias += arrayMedias[i] / arrayMedias.length;
    };
    console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
};
mediaNotaAlunos(arrayAlunos);


let mediaNotaGenero = (obj, gen) => {
    let arrayAluno = obj.filter(e => e.sexo == gen);
    if (gen == 'M') {
        let arrayMedia = arrayAluno.map(e => e.media())
        let resultMedia = 0;
        for (let i = 0; i < arrayMedia.length; i++) {
            resultMedia += arrayMedia[i] / arrayMedia.length;
        };
        console.log(`A média dos alunos do gênero masculino é ${resultMedia.toFixed(2)}.`);
    } else if (gen == 'F') {
        let arrayMedia = arrayAluno.map(e => e.media())
        let resultMedia = 0;
        for (let i = 0; i < arrayMedia.length; i++) {
            resultMedia += arrayMedia[i] / arrayMedia.length;
        };
        console.log(`A média dos alunos do gênero feminino é ${resultMedia.toFixed(2)}.`);
    };
};

mediaNotaGenero(arrayAlunos, 'M');



