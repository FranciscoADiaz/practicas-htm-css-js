
//EVENTO DE ZOOM PARA LOS PÁRRAFOS
const parrafos = document.querySelectorAll(".text");

parrafos.forEach(elemento => {
  elemento.addEventListener("mouseover", function aumentarTamaño() {
    this.style.transform = "scale(1.05)";
  });
  
  elemento.addEventListener("mouseout", function regresarTamaño() {
    this.style.transform = "scale(1)";
  });
});




 