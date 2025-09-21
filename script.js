// Crear las listas de imágenes, títulos y frases
const imagenes = [
  "https://thumbs.dreamstime.com/b/vibrante-parque-de-atracciones-en-la-diversi%C3%B3n-nocturna-dise%C3%B1o-vectorial-excitaci%C3%B3n-ai-generativo-una-animada-ilustraci%C3%B3n-un-382925037.jpg",
];

// Trae los elementos del HTML que tienen ese id
const imagen = document.getElementById("foto");

const mensajes = [
  "🎉 ",
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

