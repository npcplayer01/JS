function calcularNotaFinal(nombre, carnet, notaExamen, notaTareas, notaAsistencia, notaInvestigacion) {
    const notaFinal = (notaExamen * 0.2) + (notaTareas * 0.4) + (notaAsistencia * 0.1) + (notaInvestigacion * 0.3);
  
    console.log("Datos del alumno:");
    console.log("Nombre:", nombre);
    console.log("Carnet:", carnet);
    console.log("Nota final:", notaFinal.toFixed(2));
  }
  
  calcularNotaFinal("Juan Pérez", "2023-001", 85, 90, 95, 78);