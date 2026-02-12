// logica Pedido
const precios = {
  "Hamburguesa Especial": 18000,
  "Pizza Pepperoni": 22000,
  "Ensalada César": 12000,
  "Brownie con Helado": 9000,
  "Arepitas de maíz con hogao": 20000,
  "Filete de res en salsa de vino tinto": 50000,
  "Arroz con leche": 8000,
  "Postre de tres leches": 14000,
  "Patacones con guacamole y suero costeño": 25000
};

const listaPlatos = document.getElementById("lista-platos");
const precioTotal = document.getElementById("precioTotal");

function agregarPlato() {
  const div = document.createElement("div");
  div.className = "plato-item";

  const opciones = Object.keys(precios)
    .map(p => `<option value="${p}">${p}</option>`)
    .join("");

  div.innerHTML = `
    <select class="plato">
      <option value="">Seleccione un plato</option>
      ${opciones}
    </select>

    <input
      type="number"
      class="cantidad"
      min="1"
      placeholder="Cantidad"
    >

    <button
      type="button"
      class="btn-eliminar"
      onclick="this.parentElement.remove(); calcularTotal()"
    >
      ❌
    </button>
  `;

  listaPlatos.appendChild(div);

  div.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("change", calcularTotal);
    el.addEventListener("input", calcularTotal);
  });
}

function calcularTotal() {
  let total = 0;

  document.querySelectorAll(".plato-item").forEach(item => {
    const plato = item.querySelector(".plato").value;
    const cantidad = parseInt(item.querySelector(".cantidad").value, 10);

    if (plato && cantidad) {
      total += precios[plato] * cantidad;
    }
  });

  precioTotal.value = "$" + total.toLocaleString("es-CO");
}
