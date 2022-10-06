/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


const getData = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();

  return data;
};

const printData = async () => {
  const newData = await getData();
  document.querySelector("#title1").innerHTML = newData[0].title;
};

window.addEventListener("load", async (e) => {
  printData();
});

const getForm = async ()=>{


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