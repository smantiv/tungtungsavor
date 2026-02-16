// ===============================
// LOGICA RESERVAS
// ===============================

// DOM
const formReserva = document.getElementById("formReserva");
const inputPersonas = document.getElementById("personas");
const contenedorEdades = document.getElementById("contenedor-edades");
const inputFecha = document.getElementById("fecha");

// Overlay
const overlay = document.getElementById("overlay");
const mensajeTitulo = document.getElementById("mensajeTitulo");
const mensajeTexto = document.getElementById("mensajeTexto");

// ===============================
// FUNCIONES
// ===============================

// Mostrar mensaje
function mostrarMensaje(texto, tipo = "ok") {

  if (tipo === "ok") {
    mensajeTitulo.textContent = " Reserva Exitosa";
  } else {
    mensajeTitulo.textContent = " Error";
  }

  mensajeTexto.textContent = texto;

  overlay.classList.remove("oculto");

  // Cerrar solo
  setTimeout(() => {
    overlay.classList.add("oculto");
  }, 3000);
}

// Generar edades dinámicas
function generarEdades() {

  const num = parseInt(inputPersonas.value);

  contenedorEdades.innerHTML = "";

  if (num > 0) {

    for (let i = 1; i <= num; i++) {

      const input = document.createElement("input");

      input.type = "number";
      input.min = 1;
      input.max = 100;

      input.placeholder = `Edad persona ${i}`;

      input.classList.add("edad");

      contenedorEdades.appendChild(input);
    }
  }
}

// ===============================
// EVENTOS
// ===============================

// Cambia personas → genera edades
inputPersonas.addEventListener("input", generarEdades);

// Enviar formulario
formReserva.addEventListener("submit", function (e) {

  e.preventDefault();

  const personas = parseInt(inputPersonas.value);
  const fechaReserva = inputFecha.value;

  // ===============================
  // VALIDACIONES
  // ===============================

  // Personas
  if (!personas || personas <= 0) {
    mostrarMensaje("El número de personas debe ser mayor a cero", "error");
    return;
  }

  // Edades
  const edades = document.querySelectorAll(".edad");

  if (edades.length !== personas) {
    mostrarMensaje("Debes ingresar todas las edades", "error");
    return;
  }

  for (let input of edades) {

    if (input.value === "") {
      mostrarMensaje("Debes llenar todas las edades", "error");
      return;
    }

    const edad = parseInt(input.value);

    if (edad < 1 || edad > 100) {
      mostrarMensaje("Las edades deben estar entre 1 y 100 años", "error");
      return;
    }
  }

  // Fecha
  if (fechaReserva === "") {
    mostrarMensaje("Debes seleccionar una fecha", "error");
    return;
  }

  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0);

  const fechaSeleccionada = new Date(fechaReserva);

  if (fechaSeleccionada < hoy) {
    mostrarMensaje("No puedes reservar antes de hoy", "error");
    return;
  }

  // ===============================
  // CONFIRMACION
  // ===============================

  mostrarMensaje("Tu mesa fue reservada con éxito ", "ok");

  // Reset
  formReserva.reset();
  contenedorEdades.innerHTML = "";
});
