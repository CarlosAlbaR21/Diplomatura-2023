var alumnos = [
  {
    nombre: 'Juan Gomez',
    nota: 7
  }, {
    nombre: 'Pedro Rodriguez',
    nota: 4
  }, {
    nombre: 'Roxana García',
    nota: 8
  }, {
    nombre: 'Luciano Lopez',
    nota: 5
  }, {
    nombre: 'Fernanda Gimenez',
    nota: 6
  }, {
    nombre: 'Florencia Martinez',
    nota: 10
  }, {
    nombre: 'Raul Sanchez',
    nota: 7
  }, {
    nombre: 'Sandra Figueroa',
    nota: 8
  }
];

// determina alumnos filtrados por aprobados
var alumnosAprobados = alumnos.filter(function(alumno) {
  return alumno.nota >= 7;
});

// determina alumnos filtrados por aprobados no aprobados 
var alumnosNoAprobados = alumnos.filter(function(alumno) {
  return alumno.nota < 7;
});

// Mostrar notas de los alumnos 
document.write('<h1>Alumnos Aprobados (Padres Felices):</h1>');
alumnosAprobados.forEach(function(alumno) {
  document.write(`<p>${alumno.nombre}: ${alumno.nota}</p>`);
});

document.write('<h1>Alumnos No Aprobados (Padres para nada Felices):</h1>');
alumnosNoAprobados.forEach(function(alumno) {
  document.write(`<p>${alumno.nombre}: ${alumno.nota}</p>`);
});

