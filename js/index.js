/* Funcionalidad para el menu hamburguesa desplegar al click */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/* Conexión con API de prueba (jsonplaceholder) para recibir contenido para la pagina:

1. Funcion para recibir el contenido general y guardarlo en una variable*/
const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();

  return data;
};
/* 2. Función para seleccionar el contenido especifico de la variable y conectarlo con 
el punto del Html donde debe ser introducido.*/

const printData = async () => {
  const newData = await getData();
  document.querySelector("#title1").innerHTML = newData[0].title;
  document.querySelector("#text1").innerHTML = newData[0].body;
  document.querySelector("#title2").innerHTML = newData[1].title;
  document.querySelector("#text2").innerHTML = newData[1].body;
  document.querySelector("#title3").innerHTML = newData[2].title;
  document.querySelector("#text3").innerHTML = newData[2].body;
  
};

//3. Llamada de la función cada vez que se cargue la pagina
window.addEventListener("load", async (e) => {
  printData();
});