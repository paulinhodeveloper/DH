class estudantes {
    constructor(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
        this.calcularMedia = () => {
            let media = this.notas.reduce((nota, curso) => {
                return nota + curso;
            }, 0);
            media = media / this.notas.length;
            return media;
        };
        this.adiconarFaltas = () => {
            this.faltas++;
        }
    };
};

module.exports = estudantes;

