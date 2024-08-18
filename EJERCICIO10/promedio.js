function crearCamposEdad(turno, cantidad, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    for (let i = 1; i <= cantidad; i++) {
        const label = document.createElement("label");
        label.textContent = `Edad estudiante ${i}: `;
        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.id = `${turno}-${i}`; 
        contenedor.appendChild(label);
        contenedor.appendChild(input);
        contenedor.appendChild(document.createElement("br")); 
    }
}

function calcularPromedio(turno) {
    let sumaEdades = 0;
    let cantidadEstudiantes;

    switch (turno) {
        case 'manana':
            cantidadEstudiantes = 5;
            break;
        case 'tarde':
            cantidadEstudiantes = 6;
            break;
        case 'noche':
            cantidadEstudiantes = 11;
            break;
    }

    for (let i = 1; i <= cantidadEstudiantes; i++) {
        const edad = parseInt(document.getElementById(`${turno}-${i}`).value);
        if (!isNaN(edad) && edad >= 0) {
            sumaEdades += edad;
        } else {
            alert(`Por favor, ingrese una edad válida para el estudiante ${i} del turno ${turno}.`);
            return NaN; 
        }
    }

    return sumaEdades / cantidadEstudiantes;
}

function calcularPromedios() {
    const promedioManana = calcularPromedio('manana');
    const promedioTarde = calcularPromedio('tarde');
    const promedioNoche = calcularPromedio('noche');

    if (isNaN(promedioManana) || isNaN(promedioTarde) || isNaN(promedioNoche)) {
       
        return;
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Promedios de Edades:</h2>
        <p>Turno Mañana: ${promedioManana.toFixed(2)}</p>
        <p>Turno Tarde: ${promedioTarde.toFixed(2)}</p>
        <p>Turno Noche: ${promedioNoche.toFixed(2)}</p>
    `;

    let turnoMayorPromedio = "Mañana";
    let mayorPromedio = promedioManana;

    if (promedioTarde > mayorPromedio) {
        mayorPromedio = promedioTarde;
        turnoMayorPromedio = "Tarde";
    }

    if (promedioNoche > mayorPromedio) {
        turnoMayorPromedio = "Noche";
    }

    resultadoDiv.innerHTML += `<p>El turno con mayor promedio de edades es: ${turnoMayorPromedio}</p>`;
}
window.onload = function() {
    crearCamposEdad('manana', 5, 'edades-manana');
    crearCamposEdad('tarde', 6, 'edades-tarde');
    crearCamposEdad('noche', 11, 'edades-noche');
};