let apiKey = "fbac79090e6da15d046d126596a2eb75";
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let difKelvin = 273.15;

document.getElementById("botonBusqueda").addEventListener("click", () => {
  const ciudad = document.getElementById("ciudadEntrada").value;
  if (ciudad) {
    fetchDatosClima(ciudad);
  }
});

function fetchDatosClima(ciudad) {
  fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
    .then((data) => data.json())
    .then((data) => mostrarDatosclima(data));
}

function mostrarDatosclima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre},${paisNombre}`
    
    const temperaturaInf = document.createElement('p')
    temperaturaInf.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)} °C`

    const humedadInf = document.createElement('p')
    humedadInf.textContent = `La humedad es: ${Math.floor(humedad)} %`

    const iconInf = document.createElement('img')
    iconInf.src=`https://openweathermap.org/img/wn/${icono}.png`

    const descripcionInf = document.createElement('p')
    descripcionInf.textContent = `La descripcion meteorológica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInf)
    divDatosClima.appendChild(humedadInf)
    divDatosClima.appendChild(iconInf)
    divDatosClima.appendChild(descripcionInf)

}