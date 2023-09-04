
const cuadradoRojo = document.getElementById('cuadradoRojo');
const cuadradoVerde = document.getElementById('cuadradoVerde');
const cuadradoAzul = document.getElementById('cuadradoAzul');

cuadradoRojo.addEventListener('click', () => {
  cambiarColor('red');
});

cuadradoVerde.addEventListener('click', () => {
  cambiarColor('green');
});

cuadradoAzul.addEventListener('click', () => {
  cambiarColor('blue');
});

function cambiarColor(color) {
  document.body.style.backgroundColor = color;
}
