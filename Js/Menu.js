document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const selectCategoria = document.getElementById("categoria");
  const categorias = document.querySelectorAll(".categoria");

  function filtrarMenu() {
    const texto = buscador.value.toLowerCase().trim();
    const categoriaSeleccionada = selectCategoria.value;

    categorias.forEach(categoria => {
      const cards = categoria.querySelectorAll(".card");
      let hayResultados = false;

      cards.forEach(card => {
        const textoCard = card.textContent.toLowerCase();

        // ✔️ filtro por texto
        const coincideTexto = textoCard.includes(texto);

        // ✔️ filtro por categoría
        const coincideCategoria =
          categoriaSeleccionada === "todas" ||
          card.classList.contains(categoriaSeleccionada);

        if (coincideTexto && coincideCategoria) {
          card.style.display = "";
          hayResultados = true;
        } else {
          card.style.display = "none";
        }
      });

      // mostrar u ocultar el título de la categoría
      categoria.style.display = hayResultados ? "" : "none";
      console.log("Categoría:", selectCategoria.value);
    });
  }

  buscador.addEventListener("input", filtrarMenu);
  selectCategoria.addEventListener("change", filtrarMenu);
});
