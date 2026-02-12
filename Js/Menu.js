document.addEventListener("DOMContentLoaded", () => {
  const buscador = document.getElementById("buscador");
  const categorias = document.querySelectorAll(".categoria");

  buscador.addEventListener("input", () => {
    const valor = buscador.value.toLowerCase().trim();

    categorias.forEach(categoria => {
      const cards = categoria.querySelectorAll(".card");
      let hayResultados = false;

      cards.forEach(card => {
        const texto = card.textContent.toLowerCase();

        if (texto.includes(valor)) {
          card.style.display = "";
          hayResultados = true;
        } else {
          card.style.display = "none";
        }
      });

      // 🔥 Aquí ocultamos la categoría si no tiene resultados
      if (hayResultados) {
        categoria.style.display = "";
      } else {
        categoria.style.display = "none";
      }
    });
  });
});
