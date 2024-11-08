function funcaoif(){

let numero = document.getElementById('numeroUsuario').value;
numero = Number(numero);
if (numero < 16) {
    document.getElementById('resultado').innerText = "Não pode votar";
}
else if (numero >= 16 && numero <= 17){
    document.getElementById('resultado').innerText = "opcional";
}
else if (numero >= 18 && numero <= 60) {
    document.getElementById('resultado').innerText = "obrigatório";
}  
else {
    document.getElementById('resultado').innerText = "isento";
}
}
