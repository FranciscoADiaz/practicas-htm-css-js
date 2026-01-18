


/**MODAL PARA LA GALERÍA DE IMÁGENES**/
document.querySelector('#galeria').addEventListener('click', (e) => {
   if (e.target.classList.contains('img-btn-modal')) {
     document.querySelector('.img-modal').src = e.target.src;
   }
 });
 






