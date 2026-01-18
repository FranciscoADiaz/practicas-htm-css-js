
function obtenerPersonajes(finalizado) {
  
  fetch("https://rickandmortyapi.com/api/character")
    .then((respuesta) => {
      return respuesta.json();
    })

    .then((datos) => {
      finalizado(datos);
    })

    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}


obtenerPersonajes((datos) => {
  
  datos.results.forEach((personaje) => {

    const articulo = document.createRange().createContextualFragment(`
      <article>
        <!-- Contenedor de la imagen -->
        <div class="contenedor-imagen">
          <!-- Mostramos la imagen del personaje -->
          <img src="${personaje.image}" alt="${personaje.name}">
        </div>
        <!-- Nombre del personaje -->
        <h2>${personaje.name}</h2>
        <!-- Estado del personaje (vivo, muerto, desconocido) -->
        <span>${personaje.status}</span>
      </article>
    `);

    
    const contenedor = document.getElementById("contenedor");
    contenedor.appendChild(articulo);
  });
});
