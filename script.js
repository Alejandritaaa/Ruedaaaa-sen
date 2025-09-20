const mensajes = [
  "🎉 ¡Te ganaste un algodón de azúcar!",
  "🎁 ¡Sorpresa mágica en camino!",
  "🎶 Suena una melodía encantada.",
  "🎈 Un globo se eleva hacia el cielo.",
  "📸 Una cámara toma tu mejor foto.",
  "🍿 Palomitas infinitas por un día.",
  "🧚‍♀️ Una hada te lanza polvo de estrellas.",
  "🚀 ¡Viaje gratuito a la montaña rusa cósmica!"
];

const resultado = document.getElementById("resultado");
const cabinas = document.querySelectorAll(".cabina");

cabinas.forEach(cabina => {
  cabina.addEventListener("click", () => {
    const index = parseInt(cabina.getAttribute("data-index"));
    resultado.innerHTML = mensajes[index];
  });
});
