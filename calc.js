let captura;

do {
    captura = parseInt(prompt("Buenassss...\n\n Qué operación necesitás usar kpo? \n 1 Suma.\n 2 Resta.\n 3 Multiplicación.\n 4 División.\n\n (Presioná la tecla numérica correspondiente a tu selección)"));

    if (captura < 1 || captura > 4 || isNaN(captura)) {
        alert("Ingresaste un número inválido.\nIngresá un número del 1 al 4 salamín.");
    }
} while (captura < 1 || captura > 4 || isNaN(captura));

let namberUan = parseInt(prompt("Tecleá el primer número: "));
let namberChu = parseInt(prompt("Tecleá el segundo número: "));
let resultado; // Sin inicializar

//FUNCIONES

//Suma
function suma(num1, num2){
    return num1 + num2;
}

//Resta
function resta(num1, num2){
    return num1 - num2;
}

//Multiplicación
function multi(num1, num2){
    return num1 * num2;
}

//División
function div(num1, num2){
    return num1 / num2;
}

//Llamadas a las funciones y resultado
switch(captura){
    case 1:
        resultado = suma(namberUan, namberChu);
        alert("El resultado de tu SUMA es: " + resultado);
        break;

    case 2:
        resultado = resta(namberUan, namberChu);
        alert("El resultado de tu RESTA es: " + resultado);
        break;

    case 3:
        resultado = multi(namberUan, namberChu);
        alert("El resultado de tu MULTIPLICACIÓN es: " + resultado);
        break;

    case 4:
        resultado = div(namberUan, namberChu);
        alert("El resultado de tu DIVISIÓN es: " + resultado);
        break;
}
