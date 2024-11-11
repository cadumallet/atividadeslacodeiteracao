function funcaoif(){

let numero = document.getElementById('numeroUsuario').value;
numero = Number(numero);
if (numero >= 7) {
    document.getElementById('resultado').innerText = "aprovado";
}
else if (numero >= 5 && numero <= 6){
    document.getElementById('resultado').innerText = "substituição";
}
else {
    document.getElementById('resultado').innerText = "reprovado";
}  
}
