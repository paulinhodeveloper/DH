let Grupo = {

    pessoa : [],

    maiorAltura : function(){
        return 'Dentro do metodo';
    },

    menorAltura : function(){
        return 'Dentro do metodo';
    },

    mediarAlturaMulheres : function(){
        return 'Dentro do metodo';
    },
    
    qtdHomens : function(){

        let result = this.pessoa.filter( (homens) => {return homens.sexo == "M"; });

        return 'Qauntidade de homens: ' + result.length;
    }
    
    // qtdHomens : function(){
    //     let result = this.pessoa.filter (function (homens) {
    //         return homens.sexo == "M";
    //     });

    //     return 'Quantidade de homens: ' + result.length;
    // }
}

module.exports = Grupo;