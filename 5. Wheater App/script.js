
let tituloLogo = document.querySelector(".titulo");
let cuerpoElem = document.querySelector("body");


window.addEventListener("load", () => {
  let numeroAleatorio = Math.ceil(
    Math.random() * 5);
  cuerpoElem.style.backgroundImage = `url('images/fondo${numeroAleatorio}.jpg')`;
 
	if (numeroAleatorio == 3 || numeroAleatorio == 4 || numeroAleatorio == 5) {/* Cambia el color del título dependiendo del fondo */
    tituloLogo.style.color = "white";
  }
});


let campoCiudad = document.querySelector("#obtener-ciudad");
campoCiudad.addEventListener("keypress", (evento) => {
  if (evento.key == "Enter") {
    obtenerDatosDeApi();
  }
});


let datosApi = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  clave: "124b92a8dd9ec01ffb0dbf64bc44af3c",
};


campoCiudad.value = "tucuman";
obtenerDatosDeApi();
campoCiudad.value = "";


function obtenerDatosDeApi() {
  let ciudadIngresada = campoCiudad.value;
  fetch(`${datosApi.url}${ciudadIngresada}&&appid=${datosApi.clave}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => agregarDatosAlDom(datos));
}


let nombreCiudad = document.querySelector(".nombre-ciudad");
let temperaturaCiudad = document.querySelector(".temperatura-clima");
let condicionCiudad = document.querySelector(".condicion-clima");
let humedadCiudad = document.querySelector(".humedad");
let fechaHoy = document.querySelector(".fecha");


function agregarDatosAlDom(datos) {
  nombreCiudad.innerHTML = `${datos.name}, ${datos.sys.country}`;
  temperaturaCiudad.innerHTML = `${Math.round(datos.main.temp - 273.15)}°C`;
  condicionCiudad.innerHTML = datos.weather[0].description;
  humedadCiudad.innerHTML = `Humedad: ${datos.main.humidity}%`;
  fechaHoy.innerHTML = obtenerFecha();
}


let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];


function obtenerFecha() {
  let tiempoActual = new Date();
  let mes = meses[tiempoActual.getMonth()];
  return `${tiempoActual.getDate()} ${mes} ${tiempoActual.getFullYear()}`;
}
