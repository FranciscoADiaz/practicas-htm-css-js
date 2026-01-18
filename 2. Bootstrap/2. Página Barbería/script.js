       // Guardar el nombre de la página en una variable (porque es lo que más vas a usar asi no estar escribiendo demás).
       var nombre = document.title;

       
       document.addEventListener('visibilitychange', function() {
           if (document.visibilityState === 'hidden') {
               document.title = "¡No te vayas! 😢";} 
               
               else {
                document.title = "¡Gracias por volver! 😁";
              
                function nombreoriginal() {
                document.title = nombre;}
 
                setTimeout(nombreoriginal, 2000);
           }
       });




       
/**MODAL PARA LA GALERÍA DE IMÁGENES**/
document.querySelector('#galeria').addEventListener('click', (e) => {
    if (e.target.classList.contains('img-btn-modal')) {
      document.querySelector('.img-modal').src = e.target.src;
    }
  });
 
