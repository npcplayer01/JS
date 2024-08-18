function mostrarTablaMultiplicar() {
    const numero = parseInt(prompt("Ingrese un número del 1 al 10:"));

    if (isNaN(numero) || numero < 1 || numero > 10) {
        console.error("Por favor, ingrese un número válido entre 1 y 10.");
        return; 
    }

    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

mostrarTablaMultiplicar(); 