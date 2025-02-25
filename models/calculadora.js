function somar(numero1, numero2){
    if (typeof numero1 !== "number" || typeof numero2 !== "number"){
        return "error";
    }
    return numero1 + numero2;
}

exports.somar = somar;

function divisao(number1, number2){
    if (typeof number1 !== "number" || typeof number2 !== "number"){
        return "error";
    }
    return number1 / number2;
}

exports.divisao = divisao;