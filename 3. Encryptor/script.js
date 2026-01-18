  

function encriptar() {
  const valores = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" }; 

  const texto = document.querySelector(".text-area").value.toLowerCase(); 

  const textoEncriptado = texto.replace(/[eiaou]/g, (letra) => valores[letra]); 

 
  const mensajeElemento = document.querySelector("#mensaje");
  mensajeElemento.innerHTML = textoEncriptado;
  mensajeElemento.style.backgroundImage = "none";
  document.querySelector(".text-area").value = ""; 

 
  if (texto === "") {
    mostrarPlaceholder(
      ".text-area",
      "Debe ingresar un texto antes de encriptar",
      2000
    );
    mensajeElemento.style.backgroundImage = ""; 
  }
}


function desencriptar() {
  const texto = document.querySelector(".text-area").value; 

  
  if (texto === "") {
    mostrarPlaceholder(
      ".text-area",
      "Debe ingresar un texto antes de desencriptar",
      2000
    );
    return;
  }

  const valores = { enter: "e", imes: "i", ai: "a", ober: "o", ufat: "u" }; 

  
  const textoDesencriptado = texto.replace(/enter|imes|ai|ober|ufat/g, (valor) => valores[valor]);

  
  const mensajeElemento = document.querySelector("#mensaje");
  mensajeElemento.innerHTML = textoDesencriptado;
  mensajeElemento.style.backgroundImage = "none";

  
  document.querySelector(".text-area").value = "";
}




function copiar() {
  const mensaje = document.querySelector("#mensaje").value; 
  navigator.clipboard.writeText(mensaje); 
}  


function mostrarPlaceholder(selector, mensaje, duracion) {
  const elemento = document.querySelector(selector);
  const placeholderAnterior = elemento.getAttribute("placeholder");
  elemento.setAttribute("placeholder", mensaje);

  
  setTimeout(() => {
    elemento.setAttribute("placeholder", placeholderAnterior || "Ingrese su texto aquí");
  }, duracion);
}


document.querySelector(".text-area").addEventListener("input", (event) => {
  const regex = /[^a-z ]/g; 
  event.target.value = event.target.value.replace(regex, '');
});





function darkmode() {
  document.body.classList.toggle("dark-mode");
}

        