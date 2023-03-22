function validarCadena() {
  const inputString = document.getElementById("inputString").value;
  const outputString = document.getElementById("outputString");

  if (/^(a{2})*$/.test(inputString)) {
    outputString.value = "La cadena es válida.";
  } else {
    outputString.value = "La cadena no es válida.";
  }
}