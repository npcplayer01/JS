function verificarEdad(edad) {
    const mensaje = (edad >= 18) ? "Eres mayor de edad." : "Eres menor de edad.";
    return mensaje;
  }
  
  const edadUsuario = prompt("Por favor, ingresa tu edad:");
  const resultado = verificarEdad(parseInt(edadUsuario));
  alert(resultado); 