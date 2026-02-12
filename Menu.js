document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("buscador");
  const cards = document.querySelectorAll(".card");

  input.addEventListener("keyup", function () {
    const textoBusqueda = input.value.toLowerCase();

    cards.forEach(card => {
      const contenido = card.textContent.toLowerCase();

      if (contenido.includes(textoBusqueda)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
