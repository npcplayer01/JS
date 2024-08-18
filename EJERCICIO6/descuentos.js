function calcularDescuentoViaje(origen, destino) {
    let descuento = 0;

    if (origen.toLowerCase() === 'palma') {
        switch (destino.toLowerCase()) {
            case 'la costa del sol':
                descuento = 0.05; // 5%
                break;
            case 'panchimalco':
                descuento = 0.10; // 10%
                break;
            case 'puerto el triunfo':
                descuento = 0.15; // 15%
                break;
        }
    }

    return descuento;
}

function mostrarResultado() {
    const origenSelect = document.getElementById("origen");
    const destinoSelect = document.getElementById("destino");
    const precio = parseFloat(document.getElementById("precio").value);

    const origenSeleccionado = origenSelect.value; 
    const destinoSeleccionado = destinoSelect.value; 

    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un precio válido.");
        return;
    }

    const descuento = calcularDescuentoViaje(origenSeleccionado, destinoSeleccionado);
    const descuentoAplicado = precio * descuento;
    const precioFinal = precio - descuentoAplicado;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Viaje seleccionado:</h2>
        <p>Origen: ${origenSeleccionado}</p> 
        <p>Destino: ${destinoSeleccionado}</p> 
        <p>Precio original: $${precio.toFixed(2)}</p>
        <p>Descuento aplicado: ${descuento * 100}% ($${descuentoAplicado.toFixed(2)})</p>
        <p>Precio final: $${precioFinal.toFixed(2)}</p>
    `;
}