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
      document.querySelector("#dashcoinTest").innerHTML = newData[0].body;
  };
  
  //3. Llamada de la función cada vez que se cargue la pagina
  window.addEventListener("load", async (e) => {
    printData();
  });
  
  