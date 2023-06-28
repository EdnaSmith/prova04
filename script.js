function calcularPeso() {
    var nome = document.getElementById("nome").value;
    var idade = parseInt(document.getElementById("idade").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);
    var sexo = document.getElementById("sexo").value;
    var imc = peso / (altura * altura)
    var msg = getMsg(imc, sexo);


    resutado(nome, idade, imc, msg);

}

function resutado(nome, idade, imc, msg) {
    document.getElementById("resultado").textContent = "Nome: " + nome + ", Idade: " + idade + ", IMC: " + imc.toFixed(2) + ", " + msg;
}

function getMsg(imc) {

    if (imc <= 22) {
        return "Abaixo do peso";
    } else if (imc > 22 && imc <= 27) {
        return "Adequado ou Eutrofico";
    } else if (imc > 27) {
        return "Sobrepeso";
    } else {
        return "IMC invalido"
    }

}