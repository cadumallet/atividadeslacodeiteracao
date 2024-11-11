function funcaoif(){

let numero = document.getElementById('numeroUsuario').value;
numero = Number(numero);
if (numero > 0) {
    document.getElementById('resultado').innerText = "o número é positivo";
}
else if (numero < 0){
    document.getElementById('resultado').innerText = "o número é negativo";
}
else {
    document.getElementById('resultado').innerText = "o número é zero";
}  
}
