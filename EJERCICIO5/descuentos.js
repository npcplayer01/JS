function calcularDescuento(modelo) {
    let descuento = 0;

    switch (modelo) {
        case 'FORD FIESTA':
            descuento = 0.05; // 5%
            break;
        case 'FORD FOCUS':
            descuento = 0.10; // 10%
            break;
        case 'FORD ESCAPE':
            descuento = 0.20; // 20%
            break;
        default:
            console.error("Modelo no válido. Por favor, seleccione un modelo de Ford.");
            return; 
    }

    return descuento;
}

function mostrarResultado() {
    const modeloSeleccionado = document.getElementById("modelo").value;
    const precio = parseFloat(document.getElementById("precio").value); 
    const descuento = calcularDescuento(modeloSeleccionado);

    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un precio válido.");
        return;
    }

    const descuentoAplicado = precio * descuento;
    const precioFinal = precio - descuentoAplicado;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Coche seleccionado: ${modeloSeleccionado}</h2>
        <p>Precio original: $${precio.toFixed(2)}</p>
        <p>Descuento aplicado: ${descuento * 100}% ($${descuentoAplicado.toFixed(2)})</p>
        <p>Precio final: $${precioFinal.toFixed(2)}</p>
    `;
}