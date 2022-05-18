
function lerMaior(a, b){

if(a===b){
    return console.log("Não pode ter valores iguais");
}

else if(a>b){
    return console.log("O Valor de A é maior");
}

else{
    return console.log("Valor de B é maior");
}
}

console.log(lerMaior(5,5))

function Votar(ano){
    if(ano >= 2004){
        return console.log("Você pode votar");
    }
    else{
        return console.log("Você não pode voltar");
    }
}

console.log(Votar(2002))

function validarSenha(senha){
    if(senha === 1234){
        return console.log("ACESSO	PERMITIDO");
    }
    else{
        return console.log("ACESSO	NEGADO");
    }
}

console.log(validarSenha(1234))

function comprarMacas(maca){
    if(maca>=12){
        valorMaca=maca*0.25;
        return valorMaca;
    } 
    else {
        valorMaca=maca*0.30;
        return valorMaca;
    }
}

console.log(comprarMacas(12))


function imc(sexo, altura){
    if(sexo==1){
        ideal=(62.1*altura) - 44.7;
        return ideal;
    } 
    
    else {
        ideal=(72.7*altura) - 58; 
        return ideal;
    }
}

console.log(imc(1, 1.90))
