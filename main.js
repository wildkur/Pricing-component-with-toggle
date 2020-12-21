const toggle = document.getElementById("toggle");
const priceOne = document.getElementById("price-one");
const priceTwo = document.getElementById("price-two");
const priceThree = document.getElementById("price-three");
let boton = document.querySelector("button");
boton.setAttribute("pulsado", false);
console.log(boton.getAttribute("pulsado"));
function prices() {
  if (toggle.checked) {
    priceOne.innerHTML = "19.99";
    priceTwo.innerHTML = "24.99";
    priceThree.innerHTML = "39.99";
  } else {
    priceOne.innerHTML = "199.99";
    priceTwo.innerHTML = "249.99";
    priceThree.innerHTML = "399.99";
  }
}

toggle.addEventListener("click", prices);

document.addEventListener("DOMContentLoaded", () => {
  console.log("cargo inicialmente los precios");
  prices();
});
