function funcaofor(){
let soma = 0;
let numero = document.getElementById('numeroUsuario').value;
numero = Number(numero);
for (let index = 0; index <= numero; index++) {
    soma+=index;
    document.getElementById('resultado').innerHTML = soma;
    
}
}
