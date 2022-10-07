/* Conectar el formulario de contacto con API de prueba (jsonplaceholder) para enviar 
la información introducida por el usuario.
*/
const getForm = async (e)=>{
    e.preventDefault();
    
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        fname: document.querySelector("#fname").value,
        email: document.querySelector("#email").value,
        fone: document.querySelector("#fone").value,
        message: document.querySelector("#message").value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      
    })
      .then((response) => response.json())
      .then((archivo) => console.log(archivo));
    }
    
    document.querySelector("form").addEventListener("submit", getForm);

    
    // const fname = document.getElementById("fname");

    // fname.addEventListener("input", function (event) {
    //   if (fname.validity.typeMismatch) {
    //     fname.setCustomValidity("Introduzca el nombre completo");
    //   } else {
    //     email.setCustomValidity("");
    //   }
    // });

