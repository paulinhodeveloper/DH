
//1.

    function maior(a,b){
        if(a>b){
            console.log(a ,"é maior");
        } else{
            console.log(b ,"é maior");
        }
    }
    maior(5,6);

// 2

function idade(anoNasc){
    if ((2022-anoNasc)>16){
        console.log("Pode votar!");
    }else{
        console.log("Não pode votar!");
    }
}
idade(2005);


// 3.   

function validaSenha(senha){
    if(senha===1234){
        console.log("ACESSO PERMITIDO!");
    }else{
        console.log("ACESSO NEGADO!");
    }
}
validaSenha(5454);

// 4. 

function precoMaca(qtde){
    let preco;
    if(qtde>=12){
        preco=qtde*0.25;
    }else{
        preco=qtde*0.30;
    }
    return preco;
}
console.log(precoMaca(5));

// 5. 

function pesoIdeal(altura, sexo){
    let peso;
    if(sexo==1){
        peso=(62.1*altura)-44.7;
    } else if(sexo==2){
        peso=(72.7*altura)-58;
    } else{
        console.log("Valor inválido");
    }
    return peso;
}
console.log(pesoIdeal(1.75,2));