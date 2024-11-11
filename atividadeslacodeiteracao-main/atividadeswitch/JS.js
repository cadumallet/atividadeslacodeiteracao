function funcaoswitch() {
    let numero = document.getElementById('numeroUsuario').value;
    numero = Number(numero);
    switch (numero) {
        case 1:
            document.getElementById('resultado').innerText = "domingo";
            break;
        case 2:
            document.getElementById('resultado').innerText = "segunda";
            break;
        case 3:

            document.getElementById('resultado').innerText = "terça";
            break;
        case 4:
            document.getElementById('resultado').innerText = "quarta";
            break;
        case 5:

            document.getElementById('resultado').innerText = "quinta";
            break;
        case 6:

            document.getElementById('resultado').innerText = "sexta";
            break;
        case 7:

            document.getElementById('resultado').innerText = "sabado";
            break;
        default:
            // Caso o valor não seja 1, 2 ou 3
            document.getElementById('resultado').innerText = "Opção inválida.";
    }
}
