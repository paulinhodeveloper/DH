function podeSubir(altura, vemAcompanhado){
    if(altura > 1.40 && altura < 2.00){
        console.log("Acesso autorizado")
        return true
    }

    else if(altura >= 1.20 && altura <= 1.40 && vemAcompanhado){
        console.log("Acesso autorizado, somente com acompanhante")
        return true
    }
    else{    
        console.log("Acesso não autorizado, nem acompanhado")    
        return false;
    }
}

console.log(podeSubir(1.30, true))