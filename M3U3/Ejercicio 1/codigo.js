function determinarMedioTransporte(distancia) {
  if (distancia >= 0 && distancia <= 1000) {
    return "pie";
  } else if (distancia > 1000 && distancia <= 10000) {
    return "bicicleta";
  } else if (distancia > 10000 && distancia <= 30000) {
    return "colectivo";
  } else if (distancia > 30000 && distancia <= 100000) {
    return "auto";
  } else {
    return "avion";
  }
}

var distancia = parseFloat(prompt("ingresa los metros, y te diremos cual es el mejor medio de transporte:"));

if (isNaN(distancia)) {
  alert("Por favor, ingresa un número válido.");
} else {
  var medioTransporte = determinarMedioTransporte(distancia);
  alert("Para " + distancia + " metros, el medio de transporte apropiado es: " + medioTransporte);
}

// prueba para pintar escribir en la pagina:
// var distancia = 5000; 
// var medioTransporte = determinarMedioTransporte(distancia);
// document.write("Para " + distancia + " metros, el medio de transporte apropiado es: " + medioTransporte);

// prueba para pintar en consola:
// console.log("Para " + distancia + " metros, el medio de transporte apropiado es: " + medioTransporte);