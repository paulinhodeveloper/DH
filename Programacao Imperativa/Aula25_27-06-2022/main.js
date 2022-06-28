let Curso = require('./modulo/curso');

// Média dos Alunos
Curso.mediaNotaAlunos(Curso.estudantes);

// Adicionar Falta
Curso.adicionarFalta(Curso.estudantes, 'Rafael Koech');

// Aprovação no Curso
Curso.aprovado(Curso.estudantes, 'Joao Matheus');

// Lista de Aprovação no Curso
Curso.listaAprovacao(Curso.estudantes);