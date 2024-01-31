// SweetAlert
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  customClass: {
    popup: "!bg-[#fafbff] hover:opacity-50",
    timerProgressBar: "!bg-[#0a3871]",
  },
  showConfirmButton: false,
  timer: 2500,
  timerProgressBar: true,
});

// Función para mostrar alertas
function showAlert(title, icon) {
  Toast.fire({
    icon: icon,
    title: title,
  });
}
function cifrarMensaje(mensaje) {
  mensaje = mensaje.replace(/e/g, "enter");
  mensaje = mensaje.replace(/i/g, "imes");
  mensaje = mensaje.replace(/a/g, "ai");
  mensaje = mensaje.replace(/o/g, "ober");
  mensaje = mensaje.replace(/u/g, "ufat");
  return mensaje;
}

function descifrarMensaje(mensajeCifrado) {
  mensajeCifrado = mensajeCifrado.replace(/imes/g, "i");
  mensajeCifrado = mensajeCifrado.replace(/ai/g, "a");
  mensajeCifrado = mensajeCifrado.replace(/enter/g, "e");
  mensajeCifrado = mensajeCifrado.replace(/ober/g, "o");
  mensajeCifrado = mensajeCifrado.replace(/ufat/g, "u");
  return mensajeCifrado;
}

function cifrar() {
  let mensaje = document.getElementById("input").value;
  let mensajeCifrado = cifrarMensaje(mensaje);
  if (mensaje == ""){
    showAlert("No ha ingresado ningun texto", "error");
  }
  document.getElementById("output").value = mensajeCifrado;
}

function descifrar() {
  let mensajeCifrado = document.getElementById("input").value;
  let mensaje = descifrarMensaje(mensajeCifrado);
  if (mensaje == ""){
    showAlert("No ha ingresado ningun texto", "error");
  }
  document.getElementById("output").value = mensaje;
}

function copiar() {
  let texto = document.getElementById("output").value;
  let inputTemp = document.createElement("textarea");
  inputTemp.value = texto;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  inputTemp.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.body.removeChild(inputTemp);
  if (texto != "") {
    showAlert("Texto copiado al portapapeles: " + texto, "info");
  } else {
    showAlert("No hay texto para copiar", "error");
  }
}

function mover() {
  let texto = document.getElementById("output").value;
  if (texto == "") {
    showAlert("No hay texto para mover", "error");
    return;
  } else {
    textarea.value = texto;
    document.getElementById("output").value = "";
    showAlert("El texto ha sido movido", "success");
  }
}

function borrar() {
  let texto = document.getElementById("output").value;
  if (textarea.value != "" || texto != "") {
    textarea.value = "";
    document.getElementById("output").value = "";
    showAlert("Los campos han sido borrados", "success");
  } else {
    showAlert("No hay datos para borrar", "error");
  }
}

let textarea = document.getElementById("input");

textarea.addEventListener("input", function (event) {
  let key = textarea.value;
  let permitidos = /^[a-zA-Z0-9\s\-.]*$/;
  if (!permitidos.test(key)) {
    textarea.value = key.replace(/[^\w\s\-.]/gi, "");
  }
});
textarea.addEventListener("input", function () {
  let texto = textarea.value;
  texto = texto.toLowerCase();
  textarea.value = texto;
});
