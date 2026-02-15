// Espera a que TODO el HTML esté cargado antes de ejecutar el JS
document.addEventListener("DOMContentLoaded", () => {

  // Captura el input del buscador por su id
  const buscador = document.getElementById("buscador");

  // Captura el select de categorías
  const selectCategoria = document.getElementById("categoria");

  // Captura todas las secciones de categorías (Entradas, Postres, etc.)
  const categorias = document.querySelectorAll(".categoria");

  // Función principal que filtra el menú
  function filtrarMenu() {

    // Texto escrito en el buscador (en minúsculas y sin espacios extra)
    const texto = buscador.value.toLowerCase().trim();

    // Categoría seleccionada en el select
    const categoriaSeleccionada = selectCategoria.value;

    // Recorre cada sección de categoría
    categorias.forEach(categoria => {

      // Obtiene todas las cards dentro de esa categoría
      const cards = categoria.querySelectorAll(".card");

      // Bandera para saber si esa categoría tiene resultados visibles
      let hayResultados = false;

      // Recorre cada plato (card)
      cards.forEach(card => {

        // Todo el texto de la card (nombre + descripción)
        const textoCard = card.textContent.toLowerCase();

        // ✔️ Verifica si el texto de la card coincide con el buscador
        const coincideTexto = textoCard.includes(texto);

        // ✔️ Verifica si la card pertenece a la categoría seleccionada
        // - Si es "todas", pasa automáticamente
        // - Si no, revisa si la card tiene la clase de la categoría
        const coincideCategoria =
          categoriaSeleccionada === "todas" ||
          card.classList.contains(categoriaSeleccionada);

        // Si cumple ambos filtros (texto + categoría)
        if (coincideTexto && coincideCategoria) {
          card.style.display = ""; // muestra la card
          hayResultados = true;    // marca que hay resultados
        } else {
          card.style.display = "none"; // oculta la card
        }
      });

      // Si hay al menos una card visible,
      // se muestra la sección completa
      // si no, se oculta
      categoria.style.display = hayResultados ? "" : "none";

      // Mensaje para depurar en consola (opcional)
      console.log("Categoría:", selectCategoria.value);
    });
  }

  // Ejecuta el filtro cada vez que se escribe en el buscador
  buscador.addEventListener("input", filtrarMenu);

  // Ejecuta el filtro cada vez que se cambia la categoría
  selectCategoria.addEventListener("change", filtrarMenu);
});
