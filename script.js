const imagenes = [
  'animacion_1/b1.png',
  'animacion_1/b2.png',
  'animacion_1/b3.png',
  'animacion_1/b4.png',
  'animacion_1/b5.png',
  'animacion_1/b6.png',
];

let indice = 0;
const img = document.getElementById('imagen');

setInterval(() => {
  indice = (indice + 1) % imagenes.length;
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = imagenes[indice];
    img.style.opacity = 1;
  }, 500);
}, 2000);

