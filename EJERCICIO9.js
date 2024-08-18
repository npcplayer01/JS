const readlineSync = require('readline-sync'); 

function convertirTemperatura() {
    const celsius = parseFloat(readlineSync.question("Ingrese la temperatura en grados Celsius: ")); 
    if (isNaN(celsius)) {
        console.log("Por favor, ingrese un valor numérico válido.");
        return;
    }

    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    console.log(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F`);
    console.log(mensaje);
}

convertirTemperatura();