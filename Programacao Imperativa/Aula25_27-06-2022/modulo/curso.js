let Aluno = require('./estudantes');

let Curso = {
    nomeCurso: 'CTD - DH',
    notaAprovacao: 7,
    faltasMaxima: 4,
    estudantes: [],
    adicionarAluno: (nome, faltas, notas) => {
        Curso.estudantes.push(new Aluno(nome, faltas, notas))
    },
    mediaNotaAlunos: obj => {
        let arrayMedias = obj.map(e => e.calcularMedia());
        let somaMedias = 0;
        for (let i = 0; i < arrayMedias.length; i++) {
            somaMedias += arrayMedias[i] / arrayMedias.length;
        };
        console.log(`A média total de notas dos alunos é ${somaMedias.toFixed(2)}.`);
    },
    adicionarFalta: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        console.log(`O aluno ${nome} tem ${aluno[0].faltas} falta(s).`)
        aluno[0].adiconarFaltas()
        console.log(`Adicionada falta para o aluno ${nome}. Número de falta(s) atual: ${aluno[0].faltas}.`)
    },
    aprovado: (obj, nome) => {
        let aluno = obj.filter(e => e.nome == nome);
        let mediaAluno = aluno.map(e => e.calcularMedia());
        mediaAluno = mediaAluno[0].toFixed(2)
        let faltaAluno = aluno.map(e => e.faltas)
        if (mediaAluno >= Curso.notaAprovacao && faltaAluno < Curso.faltasMaxima
            ||
            faltaAluno == Curso.faltasMaxima && mediaAluno > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
            console.log(`O aluno(a) ${nome} foi aprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        } else {
            console.log(`O aluno(a) ${nome} foi reprovado(a). Média: ${mediaAluno} / Faltas: ${faltaAluno}`);
        };
    },
    listaAprovacao: obj => {
        let listaAprovacao = [];
        obj.map(e => {
            if (e.calcularMedia() >= Curso.notaAprovacao && e.faltas < Curso.faltasMaxima
                ||
                e.faltas == Curso.faltasMaxima && e.calcularMedia() > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
                listaAprovacao.push(`${e.nome}: Aprovado`);
            } else {
                listaAprovacao.push(`${e.nome}: Reprovado`);
            }
        });
        console.log(listaAprovacao);
    }
};

module.exports = Curso;


Curso.adicionarAluno('Maria Soares', 1, [10, 9, 9]);
Curso.adicionarAluno('Camila Alves', 3, [6, 10, 5]);
Curso.adicionarAluno('Antonio Carlos', 5, [3, 2, 5]);
Curso.adicionarAluno('Pedro Ramos', 0, [10, 10, 10]);
Curso.adicionarAluno('Carlos Silva', 1, [10, 7, 6]);
Curso.adicionarAluno('Ricardo Santos', 0, [8, 8, 8]);
Curso.adicionarAluno('Rafael Koech', 2, [8, 10, 6]);
Curso.adicionarAluno('Ana Claudia', 0, [7, 3, 10]);
Curso.adicionarAluno('Bruno Medeiros', 1, [9, 6, 9]);
Curso.adicionarAluno('Joao Matheus', 4, [7, 10, 6]);