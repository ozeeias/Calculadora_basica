function calcular(){

    let numb1 = document.getElementById("numb1").value;
    let operacao = document.getElementById("operacao").value;
    let numb2 = document.getElementById("numb2").value;
    let resultado = 0

    if (operacao == "x"){
        resultado = numb1 * numb2
    } else if (operacao == "+"){
        resultado = parseInt(numb1) + parseInt(numb2)
    } else if(operacao == "-"){
        resultado = numb1 - numb2
    }else if(operacao == "/"){
        resultado = numb1 / numb2
    }

    if (resultado > 0){
        document.getElementById("resultado").style.color = "green"
    }else{
        document.getElementById("resultado").style.color = "red"
    }
    document.getElementById("resultado").innerHTML = resultado 
}