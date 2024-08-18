function calcularAumento(nombre, salario, categoria) {
    let aumentoPorcentaje;
  
    switch (categoria) {
      case 'A':
        aumentoPorcentaje = 0.15; 
        break;
      case 'B':
        aumentoPorcentaje = 0.30; 
        break;
      case 'C':
        aumentoPorcentaje = 0.10; 
        break;
      case 'D':
        aumentoPorcentaje = 0.20; 
        break;
      default:
        console.error("Categoría inválida. Por favor, ingrese una categoría válida (A, B, C o D).");
        return; 
    }
  
    const aumento = salario * aumentoPorcentaje;
  
    console.log("Datos del empleado:");
    console.log("Nombre:", nombre);
    console.log("Salario actual:", salario);
    console.log("Categoría:", categoria);
    console.log("Aumento:", aumento.toFixed(2)); 
    console.log("Nuevo salario:", (salario + aumento).toFixed(2)); 
  }
  

  calcularAumento("María Rodríguez", 500, 'B'); 