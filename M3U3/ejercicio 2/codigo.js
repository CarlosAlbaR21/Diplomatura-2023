function encontrarMayor(arrayDeNumeros) {
  if (arrayDeNumeros.length === 0) {
    return "El array está vacío";
  }

  let mayor = arrayDeNumeros[0]; 

  for (let i = 1; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] > mayor) {
      mayor = arrayDeNumeros[i]; 
    }
  }

  return mayor;
}

// accion que determina el 100 como mayor
var numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]; 
var resultado = encontrarMayor(numeros);
document.write("El número mayor de todos es: " + resultado);

//pintar en consola
// console.log("El número mayor en el array es: " + resultado);
