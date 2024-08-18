function analizarValores() {
    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let acumuladorPares = 0;

    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`));

        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }

        if (valor % 15 === 0) {
            multiplosDe15++;
        }

        if (valor % 2 === 0) {
            acumuladorPares += valor;
        }
    }

    console.log("Cantidad de valores negativos:", negativos);
    console.log("Cantidad de valores positivos:", positivos);
    console.log("Cantidad de múltiplos de 15:", multiplosDe15);
    console.log("Valor acumulado de los números pares:", acumuladorPares);
}

analizarValores();