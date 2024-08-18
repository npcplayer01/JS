const inquirer = require('inquirer');

async function convertirTemperatura() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'celsius',
            message: 'Ingrese la temperatura en grados Celsius:',
            validate: (input) => {
                if (isNaN(parseFloat(input))) {
                    return 'Por favor, ingrese un valor numérico válido.';
                }
                return true;
            }
        }
    ]);

    const celsius = parseFloat(answers.celsius);
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