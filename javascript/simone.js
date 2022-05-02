function f1PegaEValidaResposta() {
    let resposta = prompt("Digite sua resposta:")

    if(resposta == 1) {
        return location = "../html/game-over.html"
    }
    else if (resposta == 2) {
        return location = "../html/fase2-simone.html"
    }
    while(resposta != 1 && resposta !=2) {
        resposta = prompt("Digite sua resposta:")
        if(resposta == 1) {
            return location = "../html/game-over.html"
        }
        else if (resposta == 2) {
            return location = "../html/fase2-simone.html"
        }
            
        
    }
    
}

function f2PegaEValidaResposta() {
    let resposta = prompt("Digite sua resposta:")

    if(resposta == 1) {
        return location = "../html/fase3-simone.html"
    }
    else if (resposta == 2) {
        return location = "../html/game-over.html"
    }
    while(resposta != 1 && resposta !=2) {
        resposta = prompt("Digite sua resposta:")
        if(resposta == 1) {
            return location = "../html/fase3-simone.html"
        }
        else if (resposta == 2) {
            return location = "../html/game-over.html"
        }
            
        
    }
}

function f3PegaEValidaResposta() {
    let resposta = prompt("Digite sua resposta:")

    if(resposta == 1) {
        return location = "../html/game-over.html"
    }
    else if (resposta == 2) {
        return location = "../html/final-feliz-simone.html"
    }
    while(resposta != 1 && resposta !=2) {
        resposta = prompt("Digite sua resposta:")
        if(resposta == 1) {
            return location = "../html/game-over.html"
        }
        else if (resposta == 2) {
            return location = "../html/final-feliz-simone.html"
        }
            
        
    }
}