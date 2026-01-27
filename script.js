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


document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");

  fetch("blog.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al cargar el archivo JSON");
      }
      return response.json();
    })
    .then(posts => {
      posts.forEach(post => {
        const article = document.createElement("article");
        article.classList.add("blog-post");

        article.innerHTML = `
          <h3>${post.titulo}</h3>
          <p>${post.extracto}</p>
          <a href="${post.url}" class="btn-secondary">Leer más</a>
        `;

        blogContainer.appendChild(article);
      });
    })
    .catch(error => {
      blogContainer.innerHTML = `<p>No se pudieron cargar los artículos.</p>`;
      console.error(error);
    });
});

