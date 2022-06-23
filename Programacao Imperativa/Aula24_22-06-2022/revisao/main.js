const Pessoa = require ('./modulo/pessoa');
const Grupo = require ('./modulo/grupo');

Grupo.pessoa.push( new Pessoa(1.80, "M"));
Grupo.pessoa.push( new Pessoa(1.65, "F"));
Grupo.pessoa.push( new Pessoa(1.60, "M"));
Grupo.pessoa.push( new Pessoa(1.75, "F"));
Grupo.pessoa.push( new Pessoa(1.68, "M"));



console.log(Grupo.qtdHomens());