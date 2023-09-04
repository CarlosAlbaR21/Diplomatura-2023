
const textarea = document.getElementById('miTexto');
const contador = document.getElementById('contador');
// contador texarea
textarea.addEventListener('input', () => {
  const texto = textarea.value;
  const cantidadCaracteres = texto.length;
  contador.textContent = cantidadCaracteres + ' caracteres';
});