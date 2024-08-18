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
    const descuento = calcularDescuento(modeloSeleccionado);

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Coche seleccionado: ${modeloSeleccionado}</h2>
        <p>Descuento aplicado: ${descuento * 100}%</p>
    `;
}